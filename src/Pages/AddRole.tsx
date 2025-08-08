import { useState, useEffect } from "react";
import InputField from "../components/InputField";
import RoleTable from "./RoleTable";
import type { Role } from "../Types";


const AddRole = () => {
  const [roles, setRoles] = useState<Role[]>([]);

  const [formData, setFormData] = useState<Role>({
    RoleName: "",
    RoleType: "",
    Definition: "",
    StartDate: "",
    EndDate: "",
  });

  // Load roles from localStorage
  useEffect(() => {
    const storedRoles = localStorage.getItem("roles");
    if (storedRoles) {
      setRoles(JSON.parse(storedRoles));
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const updatedRoles = [...roles, formData];
    setRoles(updatedRoles);
    localStorage.setItem("roles", JSON.stringify(updatedRoles));

    // Reset form
    setFormData({
      RoleName: "",
      RoleType: "",
      Definition: "",
      StartDate: "",
      EndDate: "",
    });
  };

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold text-center">Add Role</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label="Role Name"
          name="RoleName"
          value={formData.RoleName}
          onChange={handleChange}
          required
        />
        
        <InputField
          label="Role Type"
          name="RoleType"
          value={formData.RoleType}
          onChange={handleChange}
        />
        
        <InputField
          label="Definition"
          name="Definition"
          value={formData.Definition}
          onChange={handleChange}
        />
        
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Start Date</label>
            <input
              type="date"
              name="StartDate"
              value={formData.StartDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 ring-blue-500"
            />
          </div>
          
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">End Date</label>
            <input
              type="date"
              name="EndDate"
              value={formData.EndDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 ring-blue-500"
            />
          </div>
        </div>
        
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Role
        </button>
      </form>

      {/* Role Table */}
      <RoleTable roles={roles} />
    </div>
  );
};

export default AddRole;