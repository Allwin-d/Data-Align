type FunctionalArea = {
  FunctionalAreaName: string;
  FunctionalAreaType: string;
  Definition: string;
  StartDate: string;
  EndDate: string;
  AlignedClients: string;
};

type Props = {
  functionalAreas: FunctionalArea[];
};

const FunctionalAreaTable = ({ functionalAreas }: Props) => {
  if (functionalAreas.length === 0)
    return <p className="mt-6">No functional areas added yet.</p>;

  return (
    <div className="pt-8">
      <table className="table-auto w-full border border-collapse border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Functional Area Name</th>
            <th className="border px-4 py-2">Functional Area Type</th>
            <th className="border px-4 py-2">Definition</th>
            <th className="border px-4 py-2">Start Date</th>
            <th className="border px-4 py-2">End Date</th>
            <th className="border px-4 py-2">Aligned Client(s)</th>
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
