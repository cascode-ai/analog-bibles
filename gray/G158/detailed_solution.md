# Detailed solution - G158

The output node is connected to the supplies only through the second-stage transistors: the p-channel driver $M_6$ to $V_{DD}$ and the n-channel current source $M_7$ to $-V_{SS}$. The gain stays roughly constant while both remain in the active region, so each swing limit is where one of them reaches the edge of saturation. The first stage does not limit the output swing.

### Step 1 — Lower limit: $M_7$

$M_7$ has its source at $-V_{SS}$ and its drain at the output. It stays in the active region while $V_{DS7}\ge V_{ov7}$:

$$
V_o-(-V_{SS})\ge V_{ov7}\ \Rightarrow\ V_o\ge-V_{SS}+V_{ov7}.
$$

Below this, $M_7$ enters triode, its output resistance collapses, and the gain drops.

### Step 2 — Upper limit: $M_6$

$M_6$ has its source at $V_{DD}$ and its drain at the output. With $V_{ov6}<0$ for the p-channel device, it stays in the active region while $V_{SD6}\ge|V_{ov6}|$:

$$
V_{DD}-V_o\ge|V_{ov6}|\ \Rightarrow\ V_o\le V_{DD}-|V_{ov6}|.
$$

### Step 3 — Output swing

$$
-V_{SS}+V_{ov7}\le V_o\le V_{DD}-|V_{ov6}|,
$$

a peak-to-peak range of $V_{DD}+V_{SS}-V_{ov7}-|V_{ov6}|$. The output can come within one overdrive of each supply, with no threshold term, exactly as in the original circuit; reversing the polarities only exchanges the roles of $M_6$ and $M_7$. Smaller overdrives of $M_6$ and $M_7$ widen the swing.
