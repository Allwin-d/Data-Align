// import type { Permission } from "../Types";

// type Props = {
//   permissions: Permission[];
// };

// const PermissionTable = ({ permissions }: Props) => {
//   if (permissions.length === 0)
//     return <p className="mt-6">No permissions added yet.</p>;

//   return (
//     <div className="pt-8">
//       <table className="table-auto w-full border border-collapse border-gray-400">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border px-4 py-2">Permission Name</th>
//             <th className="border px-4 py-2">Definition</th>
//             <th className="border px-4 py-2">Status</th>
//             <th className="border px-4 py-2">Client</th>
//             <th className="border px-4 py-2">Permission Group(s)</th>
//             <th className="border px-4 py-2">Role(s)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {permissions.map((item, index) => (
//             <tr key={index} className="border">
//               <td className="border px-4 py-2">{item.PermissionName}</td>
//               <td className="border px-4 py-2">{item.Definition}</td>
//               <td className="border px-4 py-2">{item.Status}</td>
//               <td className="border px-4 py-2">{item.Client}</td>
//               <td className="border px-4 py-2">
//                 {item.PermissionGroup.length > 0
//                   ? item.PermissionGroup.join(", ")
//                   : "None"}
//               </td>
//               <td className="border px-4 py-2">
//                 {item.Roles.length > 0 ? item.Roles.join(", ") : "None"}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PermissionTable;
