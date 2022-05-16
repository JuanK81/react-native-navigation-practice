import { createContext, useState } from "react";
import { set } from "react-native-reanimated";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
});

const FavoriteContextProvider = ({children}) => {
    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    const addFavorite = (id) => {
        setFavoriteMealIds((currentFavIds) => [...currentFavIds, id])
    };

    const removeFavorite = (id) => {
        setFavoriteMealIds((currentFavIds) => currentFavIds.filter((mealId) => mealId !== id));
    };

    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
};

export default FavoriteContextProvider;