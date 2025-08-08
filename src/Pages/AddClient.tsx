import { useEffect, useState } from "react";
import InputField from "../components/InputField";
import ClientTable from "./ClientTable";
import type { Details } from "../Types";

const AddClient = () => {
  const [details, setDetails] = useState<Details>({
    ClientName: "",
    Status: "",
    Description: "",
    Address: "",
  });

  const [clients, setClients] = useState<Details[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const storedClients = localStorage.getItem("clients");
    if (storedClients) {
      setClients(JSON.parse(storedClients));
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
    setError(""); 
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    if (
      !details.ClientName ||
      !details.Status ||
      !details.Description ||
      !details.Address
    ) {
      setError("⚠ All fields are required.");
      return;
    }

    const updatedClients = [...clients, details];
    setClients(updatedClients);
    localStorage.setItem("clients", JSON.stringify(updatedClients));

    
    setDetails({
      ClientName: "",
      Status: "",
      Description: "",
      Address: "",
    });
  };

  return (
    <div className="p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Add Client</h1>
      </div>

      
      {error && <p className="text-red-500 text-sm">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col space-y-4 w-3/4">
          <InputField
            label="Client Name"
            name="ClientName"
            value={details.ClientName}
            onChange={handleChange}
            placeholder="Name"
          />

          <div className="flex flex-col w-60 space-y-2">
            <label className="text-sm font-medium"> Status </label>
            <select
              name="Status"
              value={details.Status}
              onChange={handleChange}
              className="px-3 py-2 outline-none rounded-md focus:ring-2 ring-blue-500 border"
            >
              <option value="">-- Select Status --</option>
              <option value="Active">Active</option>
              <option value="InActive">InActive</option>
            </select>
          </div>

          <InputField
            label="Description"
            name="Description"
            value={details.Description}
            onChange={handleChange}
            placeholder="Description"
          />

          <div className="flex flex-col space-x-4">
            <label className="text-sm font-medium">Address</label>
            <textarea
              rows={4}
              placeholder="Address"
              name="Address"
              onChange={handleChange}
              value={details.Address}
              className="p-5 mt-2 focus:ring-2 ring-blue-500 outline-none rounded-md border "
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Client
        </button>
      </form>

      <ClientTable clients={clients} />
    </div>
  );
};

export default AddClient;
