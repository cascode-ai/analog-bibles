# Detailed solution - R626

**Approach.** Derive the input-referred offset of the pair, including the mismatch of the PMOS current-source loads, by requiring that at each output node the NMOS current equal the PMOS current. The load mismatch reaches the input scaled by $g_{mP}/g_{mN}$. At a fixed current, the only way to make $g_{mP}$ small is a large PMOS overdrive, and that overdrive is exactly the voltage the loads take away from the output swing.

### Step 1 — The circuit and the definition of offset

Reading the figure:

- $M_1$ and $M_2$ (NMOS) form the input pair, with their sources at a tail current source $I_{SS}$ and the input $V_{in}$ applied between their gates.
- $M_3$ and $M_4$ (PMOS) are the loads. Their sources are at $V_{DD}$ and their gates at the common bias $V_b$, so each acts as a current source.
- $V_{out}$ is taken between the two drains.

The **input-referred offset voltage** $V_{OS}$ is the DC differential input that makes $V_{out} = 0$, i.e. puts the two drains at the same voltage.

Notation: the overdrive voltage $V_{ov} = V_{GS} - V_{TH}$ ($V_{ov,N}$ for $M_{1,2}$, $|V_{ov,P}|$ for $M_{3,4}$), the transconductances $g_{mN}$, $g_{mP}$, the threshold mismatches $\Delta V_{TH,N} = V_{TH1} - V_{TH2}$ and $\Delta V_{TH,P} = |V_{TH3}| - |V_{TH4}|$, and the fractional size mismatches $[\Delta(W/L)/(W/L)]_N$ and $[\Delta(W/L)/(W/L)]_P$. With equal drain voltages, channel-length modulation affects both sides equally and drops out of the differential analysis. Every device carries $I_D = I_{SS}/2$ nominally.

### Step 2 — Current mismatch of the loads

$M_3$ and $M_4$ have the same gate voltage ($V_b$) and the same source voltage ($V_{DD}$), so their source–gate voltages are identical. From the **square-law saturation current** $I_D = \tfrac12\mu_pC_{ox}(W/L)(V_{SG} - |V_{TH}|)^2$, the linearized difference of their currents is

$$\Delta I_P = I_{D3} - I_{D4} = I_D\left[\frac{\Delta(W/L)}{W/L}\right]_P - g_{mP}\,\Delta V_{TH,P}.$$

The first term: a wider device carries proportionally more current at the same $V_{SG}$. The second: a larger $|V_{TH}|$ reduces the overdrive, and the current falls at the rate $g_{mP}$ per volt.

### Step 3 — Balance condition at the output nodes

Since $M_1$–$M_3$ and $M_2$–$M_4$ are in series, **KCL at each drain** requires $I_{D1} = I_{D3}$ and $I_{D2} = I_{D4}$. Therefore

$$I_{D1} - I_{D2} = \Delta I_P .$$

(The *sum* $I_{D1} + I_{D2} = I_{SS}$ must also match $I_{D3} + I_{D4}$; that is a common-mode condition, enforced in practice by common-mode feedback, and it does not affect the differential offset.)

The input pair's current difference, linearized in the same way, is

$$I_{D1} - I_{D2} = g_{mN}\left(V_{GS1} - V_{GS2}\right) - g_{mN}\,\Delta V_{TH,N} + I_D\left[\frac{\Delta(W/L)}{W/L}\right]_N .$$

The sources of $M_1$ and $M_2$ are common, so $V_{GS1} - V_{GS2} = V_{in}$. Equate the two expressions:

$$g_{mN}V_{in} - g_{mN}\Delta V_{TH,N} + I_D\left[\frac{\Delta(W/L)}{W/L}\right]_N = I_D\left[\frac{\Delta(W/L)}{W/L}\right]_P - g_{mP}\Delta V_{TH,P}.$$

### Step 4 — Solve for the offset

Divide by $g_{mN}$ and isolate $V_{in}$:

$$V_{in} = \Delta V_{TH,N} - \frac{I_D}{g_{mN}}\left[\frac{\Delta(W/L)}{W/L}\right]_N + \frac{g_{mP}}{g_{mN}}\left\{\frac{I_D}{g_{mP}}\left[\frac{\Delta(W/L)}{W/L}\right]_P - \Delta V_{TH,P}\right\}.$$

For a square-law device, $g_m = 2I_D/V_{ov}$, so $I_D/g_{mN} = V_{ov,N}/2$ and $I_D/g_{mP} = |V_{ov,P}|/2$. The mismatches are random and uncorrelated, so their contributions add in power:

$$V_{OS}^2 = \Delta V_{TH,N}^2 + \left(\frac{V_{ov,N}}{2}\right)^2\left[\frac{\Delta(W/L)}{W/L}\right]_N^2 + \left(\frac{g_{mP}}{g_{mN}}\right)^2\left\{\Delta V_{TH,P}^2 + \left(\frac{|V_{ov,P}|}{2}\right)^2\left[\frac{\Delta(W/L)}{W/L}\right]_P^2\right\}.$$

**Intuition.** The load mismatch produces an error *current*. To cancel an error current, the input must supply $\Delta I/g_{mN}$, so the PMOS errors are first converted to current by $g_{mP}$ and then back to an input voltage by $1/g_{mN}$. Hence the factor $g_{mP}/g_{mN}$.

### Step 5 — How to make the load contribution small at a fixed current

The tail current is given, so $I_D = I_{SS}/2$ is fixed in every device. Using $g_m = 2I_D/V_{ov}$ for both types:

$$\frac{g_{mP}}{g_{mN}} = \frac{2I_D/|V_{ov,P}|}{2I_D/V_{ov,N}} = \frac{V_{ov,N}}{|V_{ov,P}|}.$$

The PMOS threshold-mismatch term referred to the input therefore becomes

$$\frac{g_{mP}}{g_{mN}}\,\Delta V_{TH,P} = \Delta V_{TH,P}\,\frac{V_{ov,N}}{|V_{ov,P}|}.$$

It shrinks only if $g_{mP}$ is made small, i.e. if the **PMOS overdrive $|V_{ov,P}|$ is made large**: a smaller $(W/L)_P$ with $V_b$ lowered so that the loads still carry $I_{SS}/2$. To keep $\Delta V_{TH,P} \propto 1/\sqrt{W_PL_P}$ from growing at the same time, the smaller aspect ratio should come from a longer channel rather than a narrower one, which keeps or increases the gate area. (The PMOS size-mismatch term reduces to $(V_{ov,N}/2)[\Delta(W/L)/(W/L)]_P$ and does not depend on $|V_{ov,P}|$.)

**Physical picture.** A load with a large overdrive is a "weak" current source: a given threshold error changes its current by only a small fraction, $\Delta I/I = 2\Delta V_{TH,P}/|V_{ov,P}|$.

### Step 6 — The cost: output swing

For the loads to act as current sources, $M_3$ and $M_4$ must stay in saturation:

$$V_{SD3} \ge |V_{ov,P}| \quad\Longrightarrow\quad V_{D} \le V_{DD} - |V_{ov,P}| .$$

The lower limit of each output is set by the input devices, which must also stay saturated: $V_D \ge V_{in,CM} - V_{TH,N}$, where $V_{in,CM}$ is the input common-mode level. Each output node can therefore move only within

$$V_{in,CM} - V_{TH,N} \;\le\; V_D \;\le\; V_{DD} - |V_{ov,P}| .$$

Every millivolt added to $|V_{ov,P}|$ to lower the offset is a millivolt removed from the top of this range at each output, i.e. twice that from the peak-to-peak differential swing.

**Why the trade-off cannot be avoided by other means.** $g_{mP}$ could also be reduced by reducing the load current, but the tail current is fixed and the loads must carry $I_{SS}/2$ each. With the current fixed, $g_{mP} = 2I_D/|V_{ov,P}|$ falls only if $|V_{ov,P}|$ rises.

**Numerical illustration.** Let $V_{ov,N} = 0.2$ V and $\Delta V_{TH,N} = \Delta V_{TH,P} = 3$ mV, with the PMOS gate area kept constant.

| $\lvert V_{ov,P}\rvert$ | PMOS term $\Delta V_{TH,P}V_{ov,N}/\lvert V_{ov,P}\rvert$ | Threshold terms combined | Highest output level |
|---|---|---|---|
| 0.2 V | 3 mV | $\sqrt{3^2 + 3^2} = 4.2$ mV | $V_{DD} - 0.2$ V |
| 0.6 V | 1 mV | $\sqrt{3^2 + 1^2} = 3.2$ mV | $V_{DD} - 0.6$ V |

Lowering the offset by about a quarter costs 0.4 V of headroom at each output (0.8 V of peak-to-peak differential swing).

### Step 7 — A way around part of the trade-off

The ratio $g_{mP}/g_{mN} = V_{ov,N}/|V_{ov,P}|$ can also be lowered by reducing $V_{ov,N}$, i.e. by using wider input transistors. This also reduces $\Delta V_{TH,N}$ (larger area) and the $V_{ov,N}$-weighted size-mismatch terms. It does not cost output swing, but it increases the input capacitance and area, and it narrows the linear input range of the pair.

### Result

The input-referred offset is

$$V_{OS}^2 = \Delta V_{TH,N}^2 + \left(\frac{V_{ov,N}}{2}\right)^2\left[\frac{\Delta(W/L)}{W/L}\right]_N^2 + \left(\frac{g_{mP}}{g_{mN}}\right)^2\left\{\Delta V_{TH,P}^2 + \left(\frac{|V_{ov,P}|}{2}\right)^2\left[\frac{\Delta(W/L)}{W/L}\right]_P^2\right\},$$

so the load mismatch reaches the input multiplied by $g_{mP}/g_{mN} = V_{ov,N}/|V_{ov,P}|$. At a given tail current, suppressing the PMOS threshold mismatch requires a small $g_{mP}$, i.e. a large PMOS overdrive $|V_{GS} - V_{TH}|_P$. But the loads stay saturated only for $V_{out} \le V_{DD} - |V_{GS} - V_{TH}|_P$, so this overdrive comes directly out of the output swing. **Lower offset means less output swing**, and because the current is fixed, the trade-off cannot be escaped by changing the current instead.

**Common mistake.** Assuming that the PMOS loads do not affect the offset because "only the input pair sees the input". The loads set the currents that the input pair must match, so any load-current mismatch must be cancelled by an input voltage $\Delta I_P/g_{mN}$.

**Common mistake.** Reversing the dependence: claiming that a larger PMOS overdrive increases the offset, or that it increases the swing. A larger $|V_{ov,P}|$ lowers $g_{mP}$ (less offset) but raises the minimum $V_{SD}$ of the loads (less swing).

**Common mistake.** Making the loads "weak" by narrowing them at a fixed length. This raises $\Delta V_{TH,P} \propto 1/\sqrt{WL}$ in proportion to the overdrive, so the referred term $\Delta V_{TH,P}V_{ov,N}/|V_{ov,P}|$ does not improve. The aspect ratio should be reduced by lengthening the devices.
