import { sankey, sankeyCenter, sankeyLinkHorizontal } from "d3-sankey";

const MARGIN_Y = 25;
const MARGIN_X = 5;

type Data = {
    nodes: { id: string, title: string }[];
    links: { source: string; target: string; value: number }[];
};

type SankeyProps = {
    width: number;
    height: number;
    data: Data;
};

export const Sankey = ({ width, height, data }: SankeyProps) => {
    // Set the sankey diagram properties
    const sankeyGenerator = sankey() // TODO: find how to type the sankey() function
        .nodeWidth(26)
        .nodePadding(29)
        .extent([
            [MARGIN_X, MARGIN_Y],
            [width - MARGIN_X, height - MARGIN_Y],
        ])
        .nodeId((node:any) => node?.id) // Accessor function: how to retrieve the id that defines each node. This id is then used for the source and target props of links
        .nodeAlign(sankeyCenter); // Algorithm used to decide node position

    // Compute nodes and links positions
    // @ts-ignore
    const { nodes, links } = sankeyGenerator(data);

    //
    // Draw the nodes
    //
    const allNodes = nodes.map((node:any) => {
        return (
            <g height={node.y1 - node.y0}
               width={sankeyGenerator.nodeWidth()} key={node.index}>
                <svg>
                    <text
                        textAnchor={"middle"}
                        //     transform="translate(100,100) rotate(90)"
                        x={node.x0}
                        y={node.y0 -2}
                        width={200}
                        fill={"#000"}>{node.title}</text>
                </svg>

                <rect
                    height={node.y1 - node.y0}
                    width={sankeyGenerator.nodeWidth()}
                    x={node.x0}
                    y={node.y0}
                    stroke={"black"}
                    fill="#a53253"
                    fillOpacity={0.8}
                    rx={0.9}
                />

            </g>
                // .attr("class", "axis-label")
                // .attr("transform", "rotate(-90)")
                // .attr("y", -50)
                // .attr("x", -height/2)
                // .attr("fill", "#000")
                // .style("text-anchor", "middle")
                // .text("Y Label");
        );
    });

    //
    // Draw the links
    //
    const allLinks = links.map((link, i) => {
        const linkGenerator = sankeyLinkHorizontal();
        const path = linkGenerator(link);

        return (
            <path
                key={i}
                d={path}
                stroke="#a53253"
                fill="none"
                strokeOpacity={0.1}
                strokeWidth={link.width}
            />
        );
    });

    return (
        <div>
            <svg width={width} height={height}>
                {allNodes}
                {allLinks}
            </svg>
        </div>
    );
};
