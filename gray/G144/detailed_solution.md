# Detailed solution - G144

The complementary circuit is obtained by replacing every n-channel device by a p-channel one and vice versa, reversing every current source, and exchanging the rails $V_{DD}\leftrightarrow-V_{SS}$, while keeping each node's role. Name the three internal nodes as in the top circuit: X, the amplifier output that drives the output-transistor gate; Y, the diode node of the current mirror; Z, the node fed by the bias current source.

### Step 1 — Roles of the nodes in the top circuit

In [Fig. 1], $M_{11}$ (gate $V_i$) has its drain at X, which is the drain of $M_{14}$, the source of $M_{16}$ and the gate of $M_1$. $M_{12}$ (gate $V_o$) has its drain at Y, the diode-connected node of the p-channel mirror $M_{13}$–$M_{14}$, which also drives the gate of $M_{17}$ and the source of $M_{15}$. The p-channel followers $M_{15}$, $M_{16}$ have their gates at Z, where $M_{17}$ meets $I_{\text{BIAS}}$. $I_{\text{TAIL}}$ sinks the tail current of the n-channel pair to $-V_{SS}$.

### Step 2 — Connections of the bottom error amplifier and $M_2$

| Device | Type | Drain | Gate | Source | Body |
|---|---|---|---|---|---|
| $M_2$ | n-channel | $V_o$ | X | $-V_{SS}$ | $-V_{SS}$ |
| $M_{21}$ | p-channel | X | $V_i$ | tail node T | $V_{DD}$ |
| $M_{22}$ | p-channel | Y | $V_o$ | tail node T | $V_{DD}$ |
| $M_{23}$ | n-channel, diode-connected | Y | Y | $-V_{SS}$ | $-V_{SS}$ |
| $M_{24}$ | n-channel | X | Y | $-V_{SS}$ | $-V_{SS}$ |
| $M_{25}$ | n-channel follower | $V_{DD}$ | Z | Y | $-V_{SS}$ |
| $M_{26}$ | n-channel follower | $V_{DD}$ | Z | X | $-V_{SS}$ |
| $M_{27}$ | n-channel | Z | Y | $-V_{SS}$ | $-V_{SS}$ |

Current sources:

- $I_{\text{TAILP}}$: from $V_{DD}$ into the common-source node T of $M_{21}$ and $M_{22}$.
- $I_{\text{BIASP}}$: from $V_{DD}$ into node Z, pulling Z up, the complement of $I_{\text{BIAS}}$ pulling its node down.

Bodies may equally be connected as in the top circuit (each device to its own source); this does not change the topology.

### Step 3 — Check the feedback polarity

In [Fig. 2] the bottom amplifier has $V_o$ at its $+$ input and $V_i$ at its $-$ input, so its output must fall when $V_i$ rises. In the circuit above, a rise of $V_i$ makes the p-channel $M_{21}$ conduct less, so it delivers less current into X. $M_{24}$ sinks a current set by the mirror, so the difference must come from the follower $M_{26}$, and X (the gate of $M_2$) falls. Then $M_2$ conducts less and $V_o$ rises toward $V_i$: the loop is negative feedback, as required.

### Step 4 — Bias loop

$M_{27}$ copies the current of the diode $M_{23}$, and $I_{\text{BIASP}}$ forces the drain current of $M_{27}$ at node Z. The follower $M_{25}$ adjusts the voltage at Y until $I_{D27}=I_{\text{BIASP}}$, which fixes the mirror and output currents in the quiescent state:

$$
I_{D23}=I_{D24}=I_{\text{BIASP}}\frac{(W/L)_{23}}{(W/L)_{27}},\qquad I_{D2}=I_{\text{BIASP}}\frac{(W/L)_{2}}{(W/L)_{27}},
$$

the second relation holding because at balance (matched halves, $V_i=V_o$) X sits at the same voltage as Y, so $M_2$ has the same gate-source voltage as $M_{23}$ and $M_{27}$. This is the exact mirror image of how $M_{13}$, $M_{17}$, $I_{\text{BIAS}}$ and $M_{15}$ set the quiescent current of $M_1$.
