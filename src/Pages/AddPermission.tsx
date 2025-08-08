import { useState, useEffect } from "react";
import InputField from "../components/InputField";
import PermissionTable from "./PermissionTable";
import type { Permission } from "../Types";
import type { Role } from "../Types";
import type { Details } from "../Types";

const AddPermission = () => {
  const [clients, setClients] = useState<Details[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [existingPermissions, setExistingPermissions] = useState<Permission[]>(
    []
  );

  const [formData, setFormData] = useState<Permission>({
    PermissionName: "",
    Definition: "",
    Status: "",
    Client: "",
    PermissionGroup: [],
    Roles: [],
  });

  // Load all data from localStorage
  useEffect(() => {
    const storedClients = localStorage.getItem("clients");
    const storedRoles = localStorage.getItem("roles");
    const storedPermissions = localStorage.getItem("permissions");

    if (storedClients) {
      setClients(JSON.parse(storedClients));
    }

    if (storedRoles) {
      setRoles(JSON.parse(storedRoles));
    }

    if (storedPermissions) {
      const permissionData = JSON.parse(storedPermissions);
      setPermissions(permissionData);
      setExistingPermissions(permissionData);
    }
  }, []);

  // Filter active permission groups (existing permissions with Status = Active)
  const activePermissionGroups = existingPermissions.filter(
    (permission) => permission.Status === "Active"
  );

  // Filter active roles (roles with Status = Active - assuming roles have status)
  const activeRoles = roles; // Note: Role module doesn't have Status field per documentation

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMultiSelectChange = (name: string, value: string) => {
    setFormData((prev) => {
      const currentArray = prev[name as keyof Permission] as string[];
      const newArray = currentArray.includes(value)
        ? currentArray.filter((item) => item !== value)
        : [...currentArray, value];

      return { ...prev, [name]: newArray };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedPermissions = [...permissions, formData];
    setPermissions(updatedPermissions);
    setExistingPermissions(updatedPermissions);
    localStorage.setItem("permissions", JSON.stringify(updatedPermissions));

    // Reset form
    setFormData({
      PermissionName: "",
      Definition: "",
      Status: "",
      Client: "",
      PermissionGroup: [],
      Roles: [],
    });
  };

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold text-center">Add Permission</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label="Permission Name"
          name="PermissionName"
          value={formData.PermissionName}
          onChange={handleChange}
          required
        />

        <InputField
          label="Definition"
          name="Definition"
          value={formData.Definition}
          onChange={handleChange}
        />

        <div className="flex flex-col w-60 space-y-2">
          <label className="text-sm font-medium"> Status </label>
          <select
            name="Status"
            value={formData.Status}
            onChange={handleChange}
            className="px-3 py-2 outline-none rounded-md focus:ring-2 ring-blue-500 border"
          >
            <option value="">-- Select Status --</option>
            <option value="Active">Active</option>
            <option value="InActive">InActive</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Client</label>
          <select
            name="Client"
            value={formData.Client}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 ring-blue-500"
          >
            <option value="">Select Client</option>
            {clients.map((client, index) => (
              <option key={index} value={client.ClientName}>
                {client.ClientName}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Permission Group (Multi-Select)
          </label>
          <div className="border rounded-md p-2 max-h-32 overflow-y-auto">
            {activePermissionGroups.map((permission, index) => (
              <div key={index} className="flex items-center mb-1">
                <input
                  type="checkbox"
                  checked={formData.PermissionGroup.includes(
                    permission.PermissionName
                  )}
                  onChange={() =>
                    handleMultiSelectChange(
                      "PermissionGroup",
                      permission.PermissionName
                    )
                  }
                  className="mr-2"
                />
                <label className="text-sm">{permission.PermissionName}</label>
              </div>
            ))}
            {activePermissionGroups.length === 0 && (
              <p className="text-gray-500 text-sm">
                No active permission groups available
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Roles (Multi-Select)
          </label>
          <div className="border rounded-md p-2 max-h-32 overflow-y-auto">
            {activeRoles.map((role, index) => (
              <div key={index} className="flex items-center mb-1">
                <input
                  type="checkbox"
                  checked={formData.Roles.includes(role.RoleName)}
                  onChange={() =>
                    handleMultiSelectChange("Roles", role.RoleName)
                  }
                  className="mr-2"
                />
                <label className="text-sm">{role.RoleName}</label>
              </div>
            ))}
            {activeRoles.length === 0 && (
              <p className="text-gray-500 text-sm">No roles available</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Permission
        </button>
      </form>

      {/* Permission Table */}
      <PermissionTable permissions={permissions} />
    </div>
  );
};

export default AddPermission;
