import { Suspense, LazyExoticComponent, ComponentType } from "react";
import SppinerLoading from "../SppinerLoading/index";

const Loadable =
  (
    Component:
      | LazyExoticComponent<() => JSX.Element>
      | ComponentType<React.ReactNode>
  ) =>
  (props: any) =>
    (
      <Suspense fallback={<SppinerLoading />}>
        <Component {...props} />
      </Suspense>
    );

export default Loadable;
