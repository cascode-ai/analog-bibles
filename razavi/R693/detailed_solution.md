# Detailed solution - R693

**Approach.** Contact spiking shorts a source/drain diffusion to the bulk region beneath it. First find where the output of the healthy circuit sits (never near $V_{DD}$ while current flows), then examine what a short in each of the four junctions does to the DC output. Only one of them can drag $V_{out}$ up to $V_{DD}$.

### Step 1 — Where the output sits in the healthy circuit

The diode-connected $M_2$ is saturated whenever it conducts, and $I_{D2} = I_{D1} = I_D$, so (square law, $\lambda = 0$)

$$I_{D2} = \tfrac12\mu_pC_{ox}\Big(\frac{W}{L}\Big)_2\big(V_{DD} - V_{out} - |V_{THP}|\big)^2 \quad\Longrightarrow\quad V_{out} = V_{DD} - |V_{THP}| - \sqrt{\frac{2I_D}{\mu_pC_{ox}(W/L)_2}} .$$

So whenever $M_1$ draws current, $V_{out}$ is **at least $|V_{THP}|$ below $V_{DD}$**, and lower still as the current grows. With a typical $|V_{THP}| \approx 0.8$ V and $V_{DD} = 3$ V, the healthy output is below about 2.2 V. An output "near $V_{DD}$" means something is pulling the output node directly to the supply.

### Step 2 — The four candidate junctions

A spike shorts an n+ region of $M_1$ to the p-substrate (at **ground**) or a p+ region of $M_2$ to the n-well (at **$V_{DD}$**), through a small bulk spreading resistance (a few hundred ohms to a few kilohms):

| Junction | Bulk potential | What a spike shorts |
|---|---|---|
| (a) n+ source of $M_1$ / p-substrate | ground | source of $M_1$ to ground |
| (b) n+ drain of $M_1$ / p-substrate | ground | $V_{out}$ to ground |
| (c) p+ source of $M_2$ / n-well | $V_{DD}$ | source of $M_2$ to $V_{DD}$ |
| (d) p+ drain of $M_2$ / n-well | $V_{DD}$ | $V_{out}$ to $V_{DD}$ |

### Step 3 — Effect of each spike on $V_{out}$

**(a) $M_1$ source to substrate.** $R_S$ is bypassed, so for the same $V_{in}$, $V_{GS1}$ rises and the current grows. By Step 1, a larger $I_D$ makes $V_{out}$ **lower**, not higher.

**(b) $M_1$ drain to substrate.** The output node is tied to the grounded substrate, so $V_{out}$ is pulled **near 0 V**.

**(c) $M_2$ source to n-well.** The p+ source and the n-well are both already at $V_{DD}$, so nothing changes; $V_{out}$ stays at least $|V_{THP}|$ below $V_{DD}$.

**(d) $M_2$ drain to n-well.** The output node (the p+ drain of $M_2$) is connected to the n-well, which is tied to $V_{DD}$ through its contacts: a small resistance $R_{well}$ appears from $V_{out}$ to $V_{DD}$, in parallel with the diode-connected $M_2$.

<!-- diagram: diagram-01.cir -->

The current $I_{D1}$ drawn by $M_1$ is then supplied mostly by $R_{well}$:

$$V_{out} = V_{DD} - I_{D1}R_{well} .$$

For example, $I_{D1} = 100\ \mu\mathrm{A}$ and $R_{well} = 1\ \mathrm{k}\Omega$ give

$$V_{out} = 3\ \mathrm{V} - (100\ \mu\mathrm{A})(1\ \mathrm{k}\Omega) = 3 - 0.1 = 2.9\ \mathrm{V}.$$

Now $V_{SG2} = V_{DD} - V_{out} = 0.1\ \mathrm{V} < |V_{THP}|$, so $M_2$ is off. **This matches the symptom.** The stage also has essentially no gain: the small-signal load is about $R_{well}$, far smaller than the intended $1/g_{m2}$.

| Spiked junction | DC output |
|---|---|
| $M_1$ source / substrate | lower than nominal (more current) |
| $M_1$ drain / substrate | near ground |
| $M_2$ source / n-well | nominal (no effect) |
| $M_2$ drain / n-well | **near $V_{DD}$** |

### Result

The faulty junction is the **p+ drain of $M_2$ to its n-well**. The spike shorts the output node to the n-well, which is tied to $V_{DD}$, so $V_{out} \approx V_{DD} - I_{D1}R_{well}$, i.e. near $V_{DD}$, and the stage has almost no gain. A healthy diode-connected load always keeps $V_{out}$ at least $|V_{THP}|$ below $V_{DD}$; a spike at $M_1$'s drain would pull the output to ground, one at $M_1$'s source would lower the output, and one at $M_2$'s source would have no effect.

**Common mistake.** Choosing the source junction of $M_2$ because "it is the junction connected to $V_{DD}$". That source and its well are *already* at $V_{DD}$, so shorting them is harmless; only a short of the *output node* (the drain of $M_2$) drags the output to $V_{DD}$.

**Common mistake.** Blaming $M_1$'s drain junction. It sits in the grounded p-substrate, so a spike there pulls the output *down* to ground.

**Common mistake.** Thinking the healthy circuit can already produce $V_{out} \approx V_{DD}$. While $M_1$ conducts, $M_2$ needs $V_{SG2} > |V_{THP}|$, so the output stays at least one PMOS threshold below the supply.
