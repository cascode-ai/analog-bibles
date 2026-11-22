# Detailed solution - A264

Equal source–gate voltages on two p-channel devices of the same process mean equal overdrives, which forces equal current per unit aspect ratio. Express the currents of M4 and M6 through the tail current and the M5–M7 mirror and combine.

### Step 1 — Condition for $V_{SG4}=V_{SG6}$

In saturation, without channel-length modulation, a p-channel device carries

$$
I=\frac{K'_P}{2}S\,(V_{SG}-|V_{TP}|)^2 .
$$

With matched $K'_P$ and $|V_{TP}|$, equal $V_{SG}$ requires equal $I/S$:

$$
\frac{I_6}{S_6}=\frac{I_4}{S_4}\quad\Rightarrow\quad\frac{S_6}{S_4}=\frac{I_6}{I_4}.
$$

### Step 2 — Current in M4

At balance the input pair splits the tail current equally, and M4 carries M2's current:

$$
I_4=\frac{I_5}{2}.
$$

### Step 3 — Current in M6

M6 and M7 are in series, so $I_6=I_7$. M5 and M7 are n-channel devices with the same gate–source voltage, so by the same square-law argument their currents scale with their aspect ratios:

$$
\frac{I_7}{I_5}=\frac{S_7}{S_5}\quad\Rightarrow\quad I_6=I_7=\frac{S_7}{S_5}I_5 .
$$

### Step 4 — Result

Substituting Steps 2 and 3 into Step 1:

$$
\frac{S_6}{S_4}=\frac{I_6}{I_4}=\frac{(S_7/S_5)I_5}{I_5/2}=2\frac{S_7}{S_5}.
$$

The factor 2 comes from M4 carrying only half of the tail current. With this ratio, the gate of M6 sits at the same voltage as the mirror node, so the first-stage output is balanced and the op amp has no systematic offset.
