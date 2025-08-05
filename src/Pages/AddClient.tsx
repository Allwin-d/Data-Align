import { useEffect, useState } from "react";
import InputField from "../components/InputField";
import ClientTable from "./ClientTable"; // ✅ import reusable component

type Details = {
  ClientName: string;
  Status: string;
  Description: string;
  Address: string;
};

const AddClient = () => {
  const [details, setDetails] = useState<Details>({
    ClientName: "",
    Status: "",
    Description: "",
    Address: "",
  });

  const [clients, setClients] = useState<Details[]>([]);

  // 🔁 load existing clients from localStorage
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
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedClients = [...clients, details];
    setClients(updatedClients);
    localStorage.setItem("clients", JSON.stringify(updatedClients));

    // Reset form
    setDetails({
      ClientName: "",
      Status: "",
      Description: "",
      Address: "",
    });
  };

  return (
    <div className="p-6 space-y-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label="Client Name"
          name="ClientName"
          value={details.ClientName}
          onChange={handleChange}
        />
        <InputField
          label="Status"
          name="Status"
          value={details.Status}
          onChange={handleChange}
        />
        <InputField
          label="Description"
          name="Description"
          value={details.Description}
          onChange={handleChange}
        />
        <InputField
          label="Address"
          name="Address"
          value={details.Address}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Client
        </button>
      </form>

      {/* ✅ Reusable Table Component */}
      <ClientTable clients={clients} />
    </div>
  );
};

export default AddClient;
