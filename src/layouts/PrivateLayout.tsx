import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
const PrivateLayout = ({ children }: any) => {
    return (
        <>
            <div className="container" x-data="{ rightSide: false, leftSide: false }">
                {/* <div class="left-side" :class="{'active' : leftSide}"> */}
                <LeftMenu />
                <div className="main">
                    <div className="search-bar">
                        <input type="text" placeholder="Search" />
                        {/* <button class="right-side-button" @click="rightSide = !rightSide"> */}
                        <button className="right-side-button">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                        </button>
                    </div>
                    {children}
                </div>
                {/* <div class="right-side" :class="{ 'active': rightSide }"> */}
                <RightMenu />
                {/* <div class="overlay" @click="rightSide = false; leftSide = false" :class="{'active': rightSide || leftSide }"></div> */}
                <div className="overlay"></div>
            </div>
        </>
    );
}

export default PrivateLayout;
