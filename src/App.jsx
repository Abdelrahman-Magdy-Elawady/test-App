import useIntersectionObserver from "./CustomHooks";
const threSholdGeneraotr = (steps) => {
  return new Array(steps + 1).fill(0).map((step, index) => index / steps);
};
function App() {
  const [isIntersecting, intersectionRatio, ref] = useIntersectionObserver({
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: threSholdGeneraotr(100),
  });
  // console.log(intersectionRatio, isIntersecting);
  return (
    <div className="h-screen w-full bg-slate-400 ">
      <div
        ref={ref}
        className={`mt-[150vh] w-96 aspect-square bg-red-600`}
        style={{
          position: "absolute",
          left: `${intersectionRatio * 100}%`,
        }}
      ></div>
    </div>
  );
}

export default App;
