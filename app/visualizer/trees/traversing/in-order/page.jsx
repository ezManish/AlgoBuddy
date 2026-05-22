import Animation from "@/app/visualizer/trees/traversing/in-order/animation";
import VisualizerPageLayout, {
  createVisualizerPaths,
} from "@/app/visualizer/components/VisualizerPageLayout";

export const metadata = {
  title: "Tree Visualizer | Learn Tree Data Structures with Animation",
  description:
    "Visualize how Tree Data Structures work in DSA with interactive animations. Perfect for beginners and interview prep.",
  keywords: [
    "Tree DSA",
    "Tree Visualizer",
    "Learn Tree",
    "Binary Tree",
    "DSA Animation",
  ],
  robots: "index, follow",
};

const TreeVisualizer = () => {
  return (
    <VisualizerPageLayout
      paths={createVisualizerPaths("Tree", "In-Order Traversal")}
      title="In-Order Traversal"
      headerDescription="Visualize how in-order traversal visits nodes in a binary search tree."
      animation={<Animation />}
    />
  );
};

export default TreeVisualizer;
