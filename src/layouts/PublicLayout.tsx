
const PublicLayout = ({ children }: any) => {
    return (
        <>
            <div className="container" x-data="{ rightSide: false, leftSide: false }">

                {children}
            </div>

        </>
    );
}

export default PublicLayout;
