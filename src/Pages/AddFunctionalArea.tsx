import { useState, useEffect } from "react";
import InputField from "../components/InputField";
import FunctionalAreaTable from "./FunctionalAreaTable";
import type { Details } from "../Types";
import type { FunctionalArea } from "../Types";

const AddFunctionalArea = () => {
  const [clients, setClients] = useState<Details[]>([]);
  const [functionalAreas, setFunctionalAreas] = useState<FunctionalArea[]>([]);

  const [formData, setFormData] = useState<FunctionalArea>({
    FunctionalAreaName: "",
    FunctionalAreaType: "",
    Definition: "",
    StartDate: "",
    EndDate: "",
    AlignedClients: "",
  });

  // Load clients and functional areas from localStorage
  useEffect(() => {
    const storedClients = localStorage.getItem("clients");
    const storedFunctionalAreas = localStorage.getItem("functionalAreas");

    if (storedClients) {
      setClients(JSON.parse(storedClients));
    }

    if (storedFunctionalAreas) {
      setFunctionalAreas(JSON.parse(storedFunctionalAreas));
    }
  }, []);

  // Filter only active clients
  const activeClients = clients.filter((client) => client.Status === "Active");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedFunctionalAreas = [...functionalAreas, formData];
    setFunctionalAreas(updatedFunctionalAreas);
    localStorage.setItem(
      "functionalAreas",
      JSON.stringify(updatedFunctionalAreas)
    );

    // Reset form
    setFormData({
      FunctionalAreaName: "",
      FunctionalAreaType: "",
      Definition: "",
      StartDate: "",
      EndDate: "",
      AlignedClients: "",
    });
  };

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold text-center">Add Functional Area</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label="Functional Area Name"
          name="FunctionalAreaName"
          value={formData.FunctionalAreaName}
          onChange={handleChange}
          required
        />

        <InputField
          label="Functional Area Type"
          name="FunctionalAreaType"
          value={formData.FunctionalAreaType}
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

        <div>
          <label className="block text-sm font-medium mb-1">
            Align Clients
          </label>
          <select
            name="AlignedClients"
            value={formData.AlignedClients}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 ring-blue-500"
          >
            <option value="">Select Active Client</option>
            {activeClients.map((client, index) => (
              <option key={index} value={client.ClientName}>
                {client.ClientName}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Functional Area
        </button>
      </form>

      {/* Functional Area Table */}
      <FunctionalAreaTable functionalAreas={functionalAreas} />
    </div>
  );
};

export default AddFunctionalArea;
