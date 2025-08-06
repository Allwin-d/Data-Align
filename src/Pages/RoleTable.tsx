// type Role = {
//   RoleName: string;
//   RoleType: string;
//   Definition: string;
//   StartDate: string;
//   EndDate: string;
// };

// type Props = {
//   roles: Role[];
// };

// const RoleTable = ({ roles }: Props) => {
//   if (roles.length === 0)
//     return <p className="mt-6">No roles added yet.</p>;

//   return (
//     <div className="pt-8">
//       <table className="table-auto w-full border border-collapse border-gray-400">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border px-4 py-2">Role Name</th>
//             <th className="border px-4 py-2">Role Type</th>
//             <th className="border px-4 py-2">Definition</th>
//             <th className="border px-4 py-2">Start Date</th>
//             <th className="border px-4 py-2">End Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {roles.map((item, index) => (
//             <tr key={index} className="border">
//               <td className="border px-4 py-2">{item.RoleName}</td>
//               <td className="border px-4 py-2">{item.RoleType}</td>
//               <td className="border px-4 py-2">{item.Definition}</td>
//               <td className="border px-4 py-2">{item.StartDate}</td>
//               <td className="border px-4 py-2">{item.EndDate}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RoleTable;