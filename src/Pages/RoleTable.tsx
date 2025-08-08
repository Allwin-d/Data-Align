import type { Role } from "../Types";

type Props = {
  roles: Role[];
};

const RoleTable = ({ roles }: Props) => {
  const title = [
    "Role Name ",
    "Role Type",
    "Definition",
    "Status",
    "Start Date",
    "End Date",
  ];

  if (roles.length === 0) return <p className="mt-6">No roles added yet.</p>;

  return (
    <div className="pt-8">
      <table className="table-auto w-full border border-collapse border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            {title.map((item, index) => {
              return (
                <th key={index} className="border px-4 py-2">
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {roles.map((item, index) => (
            <tr key={index} className="border">
              <td className="border px-4 py-2">{item.RoleName}</td>
              <td className="border px-4 py-2">{item.RoleType}</td>
              <td className="border px-4 py-2">{item.Definition}</td>
              <td className="border px-4 py-2">{item.Status}</td>
              <td className="border px-4 py-2">{item.StartDate}</td>
              <td className="border px-4 py-2">{item.EndDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleTable;
