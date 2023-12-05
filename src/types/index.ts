export * from './movies';

export type LayoutTypes = {
    name: [name: string, setName: React.Dispatch<React.SetStateAction<string>>];
    searchPage: [
        searchPage: boolean,
        setSearchPage: React.Dispatch<React.SetStateAction<boolean>>,
    ];
    sideNav: [
        sideNav: boolean,
        setSideNav: React.Dispatch<React.SetStateAction<boolean>>,
    ];
}