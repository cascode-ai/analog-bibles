# Detailed solution - A521

The comparator offset only shifts the decision threshold; the residues produced by the switched-capacitor loop depend on the input and on the decisions alone. So the output word is unchanged until the threshold reaches the held value that lies closest to 0 V. Find the held values, then their minimum distance from zero.

### Step 1 — Held values in the ideal loop

One $\phi_1$–$\phi_2$ cycle computes $V_{out}=2V_{SH}+V_{D1}-V_{D2}$ by charge conservation at the op amp's inverting input; the comparator chooses $V_{D2}=V_{REF}$ (subtract) when $V_{SH}>0$ and $V_{D1}=V_{REF}$ (add) otherwise. Hence

$$
V_k=2V_{k-1}-b_{k-1}V_{REF}.
$$

With $V_{REF}=1$ V and $V_0=v_{in}^*=0.3$ V, the comparator decides on

| $k$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|---|
| $V_k$ (V) | 0.3 | −0.4 | 0.2 | −0.6 | −0.2 | 0.6 | 0.2 | −0.6 | −0.2 |

$V_0$ is the input, whose decision sets the first subtraction; $V_1\dots V_8$ are the residues whose decisions form the output bits.

### Step 2 — Effect of the offset

With the polarity drawn, the comparator sees $V_{SH}-V_{OS}$, i.e. its threshold moves to $V_{OS}$. The offset is not in the signal path, so as long as no decision changes, every held value is exactly as in the table. A decision first changes when the threshold reaches the held value nearest 0 V:

- $V_{OS}=+0.2$ V reaches $V_2=V_6=+0.2$ V;
- $V_{OS}=-0.2$ V reaches $V_4=V_8=-0.2$ V.

### Step 3 — Largest allowed offset

$$
|V_{OS}|<\min_k|V_k|=0.2\ \mathrm V=0.2\,V_{REF}.
$$

An offset of 0.2 V or more, of either sign, causes an error. The tolerance does not shrink from cycle to cycle, because the offset acts only on each decision and is never amplified by the loop.
