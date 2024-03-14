import { Route, Routes } from "react-router-dom";
import { routerConfig } from "./routerConfig";
import { Suspense } from "react";

const AppRouter = () => {
    console.log(Object.values(routerConfig));
    
    return (
        <Routes>
            {Object.values(routerConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<div>Loading...</div>}>
                            <div>{element}</div>
                        </Suspense>
                    )}
                />
            ))}
        </Routes>
    );
};

export default AppRouter;