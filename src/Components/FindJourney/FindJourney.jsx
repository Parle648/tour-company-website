import React from 'react';
import styles from './find-journey.module.scss';
import searchIcon from '../../img/searchicon.svg';
import label from '../../img/searchlabel.svg';


const FindJourney = props => {
    const viewWidth = document.body.clientWidth;
    return (
        <div className={styles.SearchComponent}>
            <img className={styles.SearchLabel} src={label} alt="" />
            <div className={styles.Search__block}>
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="18" viewBox="0 0 9 18" fill="none">
                    <g filter="url(#filter0_b_589_5621)">
                        <path d="M3.14211 5.21936L3.14212 5.21937L3.14368 5.21641L4.50358 2.63727L5.87454 5.21641L5.87611 5.21936L7.86901 8.99905L4.4993 15.3641C4.34111 15.0659 4.1864 14.7743 4.03393 14.487C3.07926 12.688 2.21263 11.0548 1.13132 9.00221L3.14211 5.21936Z" stroke="#79655E" stroke-width="2"/>
                    </g>
                    <defs>
                        <filter id="filter0_b_589_5621" x="-8" y="-7.5" width="25" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="4"/>
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_589_5621"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_589_5621" result="shape"/>
                        </filter>
                    </defs>
                </svg>
                <div className={styles.SearchTextBlock}>
                    <h2 className={styles.findBlockTtl}>Destination</h2>
                    <h2 className={styles.findBlockSubttl}>Where are you going?</h2>
                </div>
            </div>
            <div className={styles.Search__block} style={{marginLeft: viewWidth > 800 ? '74px' : '0px'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" margin="6px 0px 0px">
                    <path d="M8.8 16H7.2V13.6H8.8V16ZM13.0912 14.2224L11.3944 12.5256L12.5256 11.3944L14.2232 13.092L13.0928 14.2224H13.0912ZM2.9088 14.2224L1.7768 13.0912L3.4728 11.3936L4.6048 12.5248L2.9088 14.2216V14.2224ZM8 12.0056C5.78798 12.0047 3.99541 10.211 3.996 7.99893C3.99659 5.78691 5.79011 3.99411 8.00213 3.9944C10.2142 3.99469 12.0072 5.78798 12.0072 8C12.005 10.2119 10.2119 12.0043 8 12.0056ZM8 5.5944C6.67163 5.59528 5.59541 6.6727 5.596 8.00107C5.59659 9.32943 6.67377 10.4059 8.00213 10.4056C9.3305 10.4053 10.4072 9.32837 10.4072 8C10.4059 6.67135 9.32865 5.59484 8 5.5944ZM16 8.8H13.6V7.2H16V8.8ZM2.4 8.8H0V7.2H2.4V8.8ZM12.5248 4.6064L11.3944 3.4744L13.0912 1.7768L14.2232 2.9088L12.5256 4.6056L12.5248 4.6064ZM3.4744 4.6064L1.7784 2.9096L2.9104 1.7784L4.6064 3.476L3.4752 4.6056L3.4744 4.6064ZM8.8 2.4H7.2V0H8.8V2.4Z" fill="#79655E"/>
                </svg>
                <div className={styles.SearchTextBlock}>
                    <h2 className={styles.findBlockTtl}>Travel type</h2>
                    <h2 className={styles.findBlockSubttl}>Adventure Travel</h2>
                </div>
            </div>
            <div className={styles.Search__block} style={{marginLeft: viewWidth > 800 ? '19px' : '0px'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" margin="6px 0px 0px">
                    <path d="M4.78585 9.1811C5.22637 9.1811 5.58349 8.82862 5.58349 8.39382C5.58349 7.95901 5.22637 7.60653 4.78585 7.60653C4.34532 7.60653 3.98821 7.95901 3.98821 8.39382C3.98821 8.82862 4.34532 9.1811 4.78585 9.1811Z" fill="#79655E"/>
                    <path d="M8.77405 8.39382C8.77405 8.82862 8.41694 9.1811 7.97641 9.1811C7.53589 9.1811 7.17877 8.82862 7.17877 8.39382C7.17877 7.95901 7.53589 7.60653 7.97641 7.60653C8.41694 7.60653 8.77405 7.95901 8.77405 8.39382Z" fill="#79655E"/>
                    <path d="M11.167 9.1811C11.6075 9.1811 11.9646 8.82862 11.9646 8.39382C11.9646 7.95901 11.6075 7.60653 11.167 7.60653C10.7264 7.60653 10.3693 7.95901 10.3693 8.39382C10.3693 8.82862 10.7264 9.1811 11.167 9.1811Z" fill="#79655E"/>
                    <path d="M5.58349 11.5429C5.58349 11.9777 5.22637 12.3302 4.78585 12.3302C4.34532 12.3302 3.98821 11.9777 3.98821 11.5429C3.98821 11.1081 4.34532 10.7557 4.78585 10.7557C5.22637 10.7557 5.58349 11.1081 5.58349 11.5429Z" fill="#79655E"/>
                    <path d="M7.97641 12.3302C8.41694 12.3302 8.77405 11.9777 8.77405 11.5429C8.77405 11.1081 8.41694 10.7557 7.97641 10.7557C7.53589 10.7557 7.17877 11.1081 7.17877 11.5429C7.17877 11.9777 7.53589 12.3302 7.97641 12.3302Z" fill="#79655E"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.78585 1.30828C4.78585 0.873474 4.42873 0.520996 3.98821 0.520996C3.54768 0.520996 3.19056 0.873474 3.19056 1.30828H1.59528C0.714232 1.30828 0 2.01323 0 2.88284V13.9048C0 14.7744 0.714233 15.4794 1.59528 15.4794H14.3575C15.2386 15.4794 15.9528 14.7744 15.9528 13.9048V2.88284C15.9528 2.01323 15.2386 1.30828 14.3575 1.30828H12.7623C12.7623 0.873474 12.4051 0.520996 11.9646 0.520996C11.5241 0.520996 11.167 0.873474 11.167 1.30828H4.78585ZM1.59528 4.45741V2.88284H14.3575V4.45741H1.59528ZM1.59528 6.03197V13.9048H9.70857L14.3575 9.3162V6.03197H1.59528ZM14.3575 11.543L11.9646 13.9048H14.3575V11.543Z" fill="#79655E"/>
                </svg>
                <div className={styles.SearchTextBlock}>
                    <h2 className={styles.findBlockTtl}>When</h2>
                    <h2 className={styles.findBlockSubttl}>14 Dec 2022</h2>
                </div>
            </div>
            <div className={styles.Search__block}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none" margin="6px 0px 0px">
                    <path d="M1.66667 16H0V15.1579C0.00367386 11.9039 2.6132 9.26687 5.83333 9.26316H9.16667C12.3868 9.26687 14.9963 11.9039 15 15.1579V16H13.3333V15.1579C13.3306 12.8336 11.4667 10.9502 9.16667 10.9474H5.83333C3.53329 10.9502 1.66942 12.8336 1.66667 15.1579V16ZM7.5 8.42105C5.19881 8.42105 3.33333 6.53594 3.33333 4.21053C3.33333 1.88512 5.19881 0 7.5 0C9.80119 0 11.6667 1.88512 11.6667 4.21053C11.6639 6.53478 9.80004 8.41827 7.5 8.42105ZM7.5 1.68421C6.11929 1.68421 5 2.81528 5 4.21053C5 5.60577 6.11929 6.73684 7.5 6.73684C8.88071 6.73684 10 5.60577 10 4.21053C10 2.81528 8.88071 1.68421 7.5 1.68421Z" fill="#79655E"/>
                </svg>
                <div className={styles.SearchTextBlock}>
                    <h2 className={styles.findBlockTtl}>Travellers</h2>
                    <h2 className={styles.findBlockSubttl}>2 Persons</h2>
                </div>
            </div>
            <button className={styles.SearchBtn}><img src={searchIcon} alt="Search-block-btn"/>find</button>
        </div>
    );
};

export default FindJourney;