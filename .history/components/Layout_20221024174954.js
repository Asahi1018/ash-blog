export default function Layout  ({param})  {
    // debugger
    const clidren = param.children;
    console.log(param);
    return (
        <>
       
        <main>{clidren}</main>
        </>

    )
};