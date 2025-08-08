import type { FunctionalArea } from "../Types";
type Props = {
  functionalAreas: FunctionalArea[];
};

const FunctionalAreaTable = ({ functionalAreas }: Props) => {
  if (functionalAreas.length === 0)
    return <p className="mt-6">No functional areas added yet.</p>;
  const title = [
    "Functional Area Name",
    "Functional Area Type",
    "Definition",
    "Start Date",
    "End Date",
    "Aligned Client(s)",
  ];

  return (
    <div className="pt-8">
      <div className="text-start">
        <h1 className="font-bold text-xl mb-4 ">Functional Area Table : </h1>
      </div>
      <table className="table-auto w-full border border-collapse border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            {title.map((item, key) => {
              return (
                <th key={key} className="border px-4 py-2">
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {functionalAreas.map((item, index) => (
            <tr key={index} className="border">
              <td className="border px-4 py-2">{item.FunctionalAreaName}</td>
              <td className="border px-4 py-2">{item.FunctionalAreaType}</td>
              <td className="border px-4 py-2">{item.Definition}</td>
              <td className="border px-4 py-2">{item.StartDate}</td>
              <td className="border px-4 py-2">{item.EndDate}</td>
              <td className="border px-4 py-2">{item.AlignedClients}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FunctionalAreaTable;
