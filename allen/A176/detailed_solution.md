# Detailed solution - A176

The static power of each circuit is $P=V_{DD}I_{DD}$, where $I_{DD}$ is the total dc current drawn from the supply. All circuits use the same $V_{DD}$, so compare the number of branches between $V_{DD}$ and ground and the current in each, using KCL and the stated bias currents.

### Step 1 — Supply current of each circuit

Every current-source and cascode transistor carries $I$. Reading the figure:

- **Circuit 1:** one branch: p source (VBP1) → output → n cascode → n input. $I_{DD}=I$.
- **Circuit 2:** one branch: p input → p cascode → output → n sink. $I_{DD}=I$.
- **Circuit 3:** one branch: p source → p cascode → output → n cascode → n input. $I_{DD}=I$.
- **Circuit 4:** one branch: p input → p cascode → output → n cascode → n sink. $I_{DD}=I$.
- **Circuit 5:** two p sources from $V_{DD}$, one feeding the output (and the n cascode) and one feeding the cascode's source node. Both currents flow down through the n input transistor, which by KCL carries $2I$. $I_{DD}=2I$.
- **Circuit 6:** the p input carries $2I$ from $V_{DD}$; at the cascode's source node it splits into $I$ through the p cascode to the output and the n sink, and $I$ through the extra n sink. $I_{DD}=2I$.

### Step 2 — Lowest power dissipation

$$
P_{1}=P_{2}=P_{3}=P_{4}=V_{DD}I,\qquad P_{5}=P_{6}=2V_{DD}I .
$$

**Circuits 1, 2, 3 and 4 have the lowest power dissipation**, $V_{DD}I$ each. Circuits 5 and 6 are folded versions: the input transistor and the cascode are biased by separate current sources in parallel branches, so they draw twice the supply current.
