//code.js
function allPairsShortestPaths(graph) {
    const numVertices = graph.length;

    const dist = Array.from({ length: numVertices }, () =>
        Array.from({ length: numVertices }, () => Infinity)
    );

    for (let i = 0; i < numVertices; i++) {
        dist[i][i] = 0;
    }

    for (let i = 0; i < numVertices; i++) {
        for (const edge of graph[i]) {
            const { vertex, weight } = edge;
            dist[i][vertex] = weight;
        }
    }

    for (let k = 0; k < numVertices; k++) {
        for (let i = 0; i < numVertices; i++) {
            for (let j = 0; j < numVertices; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }

        // debug output
        console.log(`Intermediate state after iteration ${k + 1}:`);
        console.log(dist);
    }

    return dist;
}



