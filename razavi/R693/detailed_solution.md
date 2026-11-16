# Detailed solution - R693

**Approach.** Contact spiking shorts a source/drain diffusion to the bulk region beneath it. We first find where the output of the healthy circuit sits (it can never be near $V_{DD}$ while current flows), then examine what a short in each of the four junctions does to the DC output voltage. Only one of them can drag $V_{out}$ up to $V_{DD}$.

### Step 1 — What contact spiking does

A metal contact to a shallow diffusion can, during the anneal, grow metal "spikes" into the silicon that pierce the diffusion's pn junction. The diffusion is then electrically **shorted to its bulk**:

- an n+ region of $M_1$ is shorted to the p-substrate, which is at **ground**;
- a p+ region of $M_2$ is shorted to the n-well, which is at **$V_{DD}$**.

The short is not perfect: current must still spread through the bulk to its contacts, so there is a small series resistance (the substrate or well resistance, a few hundred ohms to a few kilohms).

### Step 2 — Where the output sits in the healthy circuit

$M_2$ is diode-connected: gate and drain are both at $V_{out}$, its source at $V_{DD}$. It is saturated whenever it conducts, and its current is (square law, $\lambda = 0$)

$$I_{D2} = \tfrac12\mu_pC_{ox}\Big(\frac{W}{L}\Big)_2\big(V_{DD} - V_{out} - |V_{THP}|\big)^2 .$$

Solving for $V_{out}$, with $I_{D2} = I_{D1} = I_D$ by KCL at the output:

$$V_{out} = V_{DD} - |V_{THP}| - \sqrt{\frac{2I_D}{\mu_pC_{ox}(W/L)_2}} .$$

So whenever $M_1$ draws current, $V_{out}$ is **at least $|V_{THP}|$ below $V_{DD}$**, and lower still as the current grows. With a typical $|V_{THP}| \approx 0.8$ V and $V_{DD} = 3$ V, the healthy output is below about 2.2 V. An output "near $V_{DD}$" therefore means something is pulling the output node directly to the supply.

### Step 3 — The four candidate junctions

| Junction | Bulk potential | What a spike shorts |
|---|---|---|
| (a) n+ source of $M_1$ / p-substrate | ground | source of $M_1$ to ground |
| (b) n+ drain of $M_1$ / p-substrate | ground | $V_{out}$ to ground |
| (c) p+ source of $M_2$ / n-well | $V_{DD}$ | source of $M_2$ to $V_{DD}$ |
| (d) p+ drain of $M_2$ / n-well | $V_{DD}$ | $V_{out}$ to $V_{DD}$ |

### Step 4 — Effect of each spike on $V_{out}$

**(a) $M_1$ source to substrate.** $R_S$ is bypassed, so for the same $V_{in}$ the gate–source voltage of $M_1$ rises and the current grows. By the formula of Step 2, a larger $I_D$ makes $V_{out}$ **lower**, not higher. Does not match.

**(b) $M_1$ drain to substrate.** The output node is tied to the grounded substrate, so $V_{out}$ is pulled **near 0 V**. Does not match.

**(c) $M_2$ source to n-well.** The p+ source and the n-well are already both connected to $V_{DD}$; shorting two nodes at the same potential changes nothing. $V_{out}$ keeps its normal value, at least $|V_{THP}|$ below $V_{DD}$. Does not match.

**(d) $M_2$ drain to n-well.** The output node (the p+ drain of $M_2$) is now connected to the n-well, and the n-well is tied to $V_{DD}$ through its contacts. In the circuit, a small resistance $R_{well}$ appears from $V_{out}$ directly to $V_{DD}$, in parallel with the diode-connected $M_2$.

<!-- diagram: diagram-01.cir -->

KCL at the output: the current $I_{D1}$ drawn by $M_1$ is supplied mostly by $R_{well}$:

$$V_{out} = V_{DD} - I_{D1}R_{well} .$$

With $R_{well}$ small, $V_{out}$ is only slightly below $V_{DD}$. For example, $I_{D1} = 100\ \mu\mathrm{A}$ and $R_{well} = 1\ \mathrm{k}\Omega$ give

$$V_{out} = 3\ \mathrm{V} - (100\ \mu\mathrm{A})(1\ \mathrm{k}\Omega) = 3 - 0.1 = 2.9\ \mathrm{V}.$$

Now $V_{SG2} = V_{DD} - V_{out} = 0.1\ \mathrm{V} < |V_{THP}|$, so $M_2$ is off and plays no role. **This matches the symptom.** The stage has essentially no gain either: the small-signal load is about $R_{well}$, far smaller than the intended $1/g_{m2}$, and $V_{out}$ is pinned to the supply.

### Step 5 — Conclusion

| Spiked junction | DC output |
|---|---|
| $M_1$ source / substrate | lower than nominal (more current) |
| $M_1$ drain / substrate | near ground |
| $M_2$ source / n-well | nominal (no effect) |
| $M_2$ drain / n-well | **near $V_{DD}$** |

### Result

The faulty junction is the **p+ drain of $M_2$ to its n-well**. The spike shorts the output node to the n-well, which is tied to $V_{DD}$, so $V_{out} \approx V_{DD} - I_{D1}R_{well}$, i.e. near $V_{DD}$, and the stage has almost no gain. A healthy diode-connected load always keeps $V_{out}$ at least $|V_{THP}|$ below $V_{DD}$; a spike at $M_1$'s drain would pull the output to ground, one at $M_1$'s source would lower the output, and one at $M_2$'s source would have no effect.

**Common mistake.** Choosing the source junction of $M_2$ because "it is the junction connected to $V_{DD}$". That source is *already* at $V_{DD}$, as is its well, so shorting them is harmless. The output can only be dragged to $V_{DD}$ if the *output node* (the drain of $M_2$) is the diffusion that is shorted.

**Common mistake.** Blaming $M_1$'s drain junction. That junction sits in the p-substrate, which is at ground, so a spike there pulls the output *down* to ground, the opposite of the symptom.

**Common mistake.** Thinking the healthy circuit can already produce $V_{out} \approx V_{DD}$. While $M_1$ conducts, the diode-connected $M_2$ needs $V_{SG2} > |V_{THP}|$ to carry the current, so the output stays at least one PMOS threshold below the supply.
