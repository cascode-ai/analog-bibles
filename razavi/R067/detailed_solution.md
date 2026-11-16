# Detailed solution - R067

**Approach.** With $M_1$ saturated and $\lambda = 0$, the common-source (CS) stage with a resistive load has gain $A_v = -g_mR_D$. Compute $g_m$ from the square law at $I_D = 1$ mA, check that the device really is saturated at this current, and multiply.

### Step 1 — Reading the circuit

From the figure: $M_1$ has its gate at $V_{in}$, its source (and bulk) at ground and its drain at $V_{out}$, which is connected to $V_{DD} = 3$ V through $R_D = 2\ \mathrm{k}\Omega$. The drain current $I_D$ flows from $V_{DD}$ through $R_D$ and $M_1$ to ground. Because the source and bulk are both grounded, there is no body effect.

### Step 2 — Transconductance at $I_D = 1$ mA

The aspect ratio is $(W/L)_1 = 50/0.5 = 100$. The **square-law transconductance** of a saturated device is

$$g_m = \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D},$$

where $\mu_nC_{ox}$ is the process transconductance parameter. Substituting:

$$g_m = \sqrt{2\,(134\times10^{-6}\ \mathrm{A/V^2})(100)(1\times10^{-3}\ \mathrm{A})} = \sqrt{2.68\times10^{-5}}\ \mathrm{A/V} = 5.18\times10^{-3}\ \mathrm{S} = 5.18\ \mathrm{mS}.$$

The corresponding **overdrive voltage** $V_{ov} = V_{GS} - V_{TH}$ is

$$V_{ov} = \frac{2I_D}{g_m} = \frac{2(1\ \mathrm{mA})}{5.18\ \mathrm{mS}} = 0.386\ \mathrm{V},$$

so the input bias is

$$V_{in} = V_{GS} = V_{TH} + V_{ov} = 0.7 + 0.386 = 1.086\ \mathrm{V}.$$

### Step 3 — Check that $M_1$ is saturated

**KVL** from $V_{DD}$ through $R_D$ to the output:

$$V_{out} = V_{DD} - I_DR_D = 3\ \mathrm{V} - (1\ \mathrm{mA})(2\ \mathrm{k}\Omega) = 3 - 2 = 1\ \mathrm{V}.$$

Saturation requires $V_{DS} \ge V_{GS} - V_{TH}$:

$$V_{DS} = V_{out} = 1\ \mathrm{V} \;\ge\; V_{ov} = 0.386\ \mathrm{V}.\ \checkmark$$

$M_1$ is saturated, with about 0.6 V of margin.

### Step 4 — Small-signal model and gain

**Small-signal model.** $V_{DD}$ is an ac ground, so $R_D$ connects the output node to ground. $M_1$ becomes a voltage-controlled current source $g_mv_{gs}$ from the output node (drain) to ground (source), with $v_{gs} = v_{in}$. Because $\lambda = 0$, there is no $r_O$ in parallel with it.

<!-- diagram: diagram-01.cir -->

**KCL at the output node** (sum of currents leaving the node = 0): the controlled source takes $g_mv_{in}$ to ground, and $R_D$ carries $v_{out}/R_D$ to ac ground:

$$g_mv_{in} + \frac{v_{out}}{R_D} = 0 .$$

Solve for $v_{out}$:

$$v_{out} = -g_mR_D\,v_{in} .$$

So the small-signal gain is

$$A_v = \frac{v_{out}}{v_{in}} = -g_mR_D = -(5.18\times10^{-3}\ \mathrm{S})(2\times10^{3}\ \Omega) = -10.35 .$$

**Intuition.** A small increase $v_{in}$ raises the drain current by $g_mv_{in}$; this extra current flows through $R_D$ and lowers the output by $g_mR_Dv_{in}$. The stage is **inverting**, hence the minus sign.

**Alternative form.** Using $g_m = 2I_D/V_{ov}$, $A_v = -2I_DR_D/V_{ov} = -2(2\ \mathrm{V})/(0.386\ \mathrm{V}) = -10.35$: twice the dc drop across $R_D$ divided by the overdrive.

### Result

$$A_v = -g_mR_D = -\sqrt{2\mu_nC_{ox}(W/L)I_D}\;R_D = -(5.18\ \mathrm{mS})(2\ \mathrm{k}\Omega) \approx -10.35,$$

with $V_{ov} = 0.386$ V ($V_{in} \approx 1.09$ V) and $V_{out} = 1$ V, which confirms saturation.

**Common mistake.** Computing $g_m$ with a wrong formula, e.g. $\mu_nC_{ox}(W/L)I_D$ (dimensionally wrong) or $2I_D/V_{GS}$ (using $V_{GS}$ instead of the overdrive $V_{GS} - V_{TH}$). The correct square-law forms are $\sqrt{2\mu_nC_{ox}(W/L)I_D}$, $\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})$ or $2I_D/(V_{GS} - V_{TH})$.

**Common mistake.** Dropping the minus sign. The CS stage inverts: a rising input increases the current through $R_D$ and pulls the output down.

**Common mistake.** Skipping the saturation check. The formula $-g_mR_D$ only holds in saturation; here $V_{DS} = 1$ V exceeds $V_{ov} = 0.39$ V, so it applies.
