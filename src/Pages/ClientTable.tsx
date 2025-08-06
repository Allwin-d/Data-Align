import type { Details } from "../Types";

type Props = {
  clients: Details[];
};

const ClientTable = ({ clients }: Props) => {
  if (clients.length === 0) <p className="mt-6">No clients added yet.</p>;

  return (
    <div className="pt-8">
      <div className="text-start text-2xl font-bold mb-5">
        <h1>Client Table :</h1>
      </div>
      <table className="table-auto w-full border border-collapse border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Client Name</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Address</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((item, index) => (
            <tr key={index} className="border ">
              <td className="border px-4 py-2">{item.ClientName}</td>
              <td className="border px-4 py-2">{item.Status}</td>
              <td className="border px-4 py-2">{item.Description}</td>
              <td className="border px-4 py-2">{item.Address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientTable;
