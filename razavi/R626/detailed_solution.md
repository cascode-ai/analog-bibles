# Detailed solution - R626

**Approach.** Derive the input-referred offset of the pair, including the mismatch of the PMOS current-source loads, by requiring the NMOS current to equal the PMOS current at each output node. The load mismatch reaches the input scaled by $g_{mP}/g_{mN}$. At a fixed current the only way to make $g_{mP}$ small is a large PMOS overdrive, which is exactly the voltage the loads take away from the output swing.

### Step 1 — Current mismatch of the loads

Notation: $V_{ov,N}$ and $|V_{ov,P}|$ are the overdrives of $M_{1,2}$ and $M_{3,4}$; $\Delta V_{TH,N} = V_{TH1} - V_{TH2}$ and $\Delta V_{TH,P} = |V_{TH3}| - |V_{TH4}|$; $[\Delta(W/L)/(W/L)]_N$ and $[\Delta(W/L)/(W/L)]_P$ are the fractional size mismatches. Every device nominally carries $I_D = I_{SS}/2$. The offset is the input that makes $V_{out} = 0$; the drains are then at equal voltages, so channel-length modulation drops out of the differential analysis.

$M_3$ and $M_4$ share their gate ($V_b$) and source ($V_{DD}$) voltages, so linearizing the square law gives

$$\Delta I_P = I_{D3} - I_{D4} = I_D\left[\frac{\Delta(W/L)}{W/L}\right]_P - g_{mP}\,\Delta V_{TH,P}.$$

### Step 2 — Balance condition at the output nodes

KCL at each drain requires $I_{D1} = I_{D3}$ and $I_{D2} = I_{D4}$, so

$$I_{D1} - I_{D2} = \Delta I_P .$$

(The sum $I_{D1} + I_{D2} = I_{SS}$ must also match $I_{D3} + I_{D4}$; that common-mode condition is enforced in practice by common-mode feedback and does not affect the differential offset.) With the common sources, $V_{GS1} - V_{GS2} = V_{in}$, and the pair's linearized current difference is

$$I_{D1} - I_{D2} = g_{mN}\left(V_{GS1} - V_{GS2}\right) - g_{mN}\,\Delta V_{TH,N} + I_D\left[\frac{\Delta(W/L)}{W/L}\right]_N .$$

Equating the two:

$$g_{mN}V_{in} - g_{mN}\Delta V_{TH,N} + I_D\left[\frac{\Delta(W/L)}{W/L}\right]_N = I_D\left[\frac{\Delta(W/L)}{W/L}\right]_P - g_{mP}\Delta V_{TH,P}.$$

### Step 3 — Solve for the offset

Dividing by $g_{mN}$:

$$V_{in} = \Delta V_{TH,N} - \frac{I_D}{g_{mN}}\left[\frac{\Delta(W/L)}{W/L}\right]_N + \frac{g_{mP}}{g_{mN}}\left\{\frac{I_D}{g_{mP}}\left[\frac{\Delta(W/L)}{W/L}\right]_P - \Delta V_{TH,P}\right\}.$$

With $g_m = 2I_D/V_{ov}$, $I_D/g_{mN} = V_{ov,N}/2$ and $I_D/g_{mP} = |V_{ov,P}|/2$. The mismatches are random and uncorrelated, so they add in power:

$$V_{OS}^2 = \Delta V_{TH,N}^2 + \left(\frac{V_{ov,N}}{2}\right)^2\left[\frac{\Delta(W/L)}{W/L}\right]_N^2 + \left(\frac{g_{mP}}{g_{mN}}\right)^2\left\{\Delta V_{TH,P}^2 + \left(\frac{|V_{ov,P}|}{2}\right)^2\left[\frac{\Delta(W/L)}{W/L}\right]_P^2\right\}.$$

The load errors become an error current through $g_{mP}$, which the input must cancel through $g_{mN}$; hence the factor $g_{mP}/g_{mN}$.

### Step 4 — Making the load contribution small at a fixed current

The tail current fixes $I_D = I_{SS}/2$ in every device, so

$$\frac{g_{mP}}{g_{mN}} = \frac{2I_D/|V_{ov,P}|}{2I_D/V_{ov,N}} = \frac{V_{ov,N}}{|V_{ov,P}|}, \qquad \frac{g_{mP}}{g_{mN}}\,\Delta V_{TH,P} = \Delta V_{TH,P}\,\frac{V_{ov,N}}{|V_{ov,P}|}.$$

This term shrinks only if $g_{mP}$ is made small, i.e. if the **PMOS overdrive $|V_{ov,P}|$ is made large**: a smaller $(W/L)_P$, with $V_b$ lowered so that the loads still carry $I_{SS}/2$. So that $\Delta V_{TH,P} \propto 1/\sqrt{W_PL_P}$ does not grow at the same time, the smaller aspect ratio should come from a longer channel, not a narrower one. (The PMOS size-mismatch term reduces to $(V_{ov,N}/2)[\Delta(W/L)/(W/L)]_P$, independent of $|V_{ov,P}|$.) A load with a large overdrive is a "weak" current source: a threshold error changes its current only by $\Delta I/I = 2\Delta V_{TH,P}/|V_{ov,P}|$.

### Step 5 — The cost: output swing

The loads stay saturated only if

$$V_{SD3} \ge |V_{ov,P}| \quad\Longrightarrow\quad V_{D} \le V_{DD} - |V_{ov,P}| ,$$

and the input devices only if $V_D \ge V_{in,CM} - V_{TH,N}$, where $V_{in,CM}$ is the input common-mode level. Each output can therefore move only within

$$V_{in,CM} - V_{TH,N} \;\le\; V_D \;\le\; V_{DD} - |V_{ov,P}| .$$

Every millivolt added to $|V_{ov,P}|$ to lower the offset removes a millivolt from the top of this range at each output, i.e. twice that from the peak-to-peak differential swing. With the load current fixed at $I_{SS}/2$, $g_{mP} = 2I_D/|V_{ov,P}|$ cannot be lowered by reducing the current instead.

**Numerical illustration.** Let $V_{ov,N} = 0.2$ V and $\Delta V_{TH,N} = \Delta V_{TH,P} = 3$ mV, with the PMOS gate area kept constant.

| $\lvert V_{ov,P}\rvert$ | PMOS term $\Delta V_{TH,P}V_{ov,N}/\lvert V_{ov,P}\rvert$ | Threshold terms combined | Highest output level |
|---|---|---|---|
| 0.2 V | 3 mV | $\sqrt{3^2 + 3^2} = 4.2$ mV | $V_{DD} - 0.2$ V |
| 0.6 V | 1 mV | $\sqrt{3^2 + 1^2} = 3.2$ mV | $V_{DD} - 0.6$ V |

Lowering the offset by about a quarter costs 0.4 V of headroom at each output (0.8 V of peak-to-peak differential swing).

### Step 6 — A way around part of the trade-off

$g_{mP}/g_{mN} = V_{ov,N}/|V_{ov,P}|$ also falls if $V_{ov,N}$ is reduced with wider input transistors, which also lowers $\Delta V_{TH,N}$ (larger area) and the $V_{ov,N}$-weighted size-mismatch terms. This costs no output swing, but it increases the input capacitance and area and narrows the pair's linear input range.

### Result

The input-referred offset is

$$V_{OS}^2 = \Delta V_{TH,N}^2 + \left(\frac{V_{ov,N}}{2}\right)^2\left[\frac{\Delta(W/L)}{W/L}\right]_N^2 + \left(\frac{g_{mP}}{g_{mN}}\right)^2\left\{\Delta V_{TH,P}^2 + \left(\frac{|V_{ov,P}|}{2}\right)^2\left[\frac{\Delta(W/L)}{W/L}\right]_P^2\right\},$$

so the load mismatch reaches the input multiplied by $g_{mP}/g_{mN} = V_{ov,N}/|V_{ov,P}|$. At a given tail current, suppressing the PMOS threshold mismatch requires a small $g_{mP}$, i.e. a large PMOS overdrive $|V_{GS} - V_{TH}|_P$. But the loads stay saturated only for $V_{out} \le V_{DD} - |V_{GS} - V_{TH}|_P$, so this overdrive comes directly out of the output swing. **Lower offset means less output swing**, and because the current is fixed, the trade-off cannot be escaped by changing the current instead.

**Common mistake.** Assuming the PMOS loads do not affect the offset because "only the input pair sees the input". The loads set the currents the pair must match, so a load-current mismatch must be cancelled by an input voltage $\Delta I_P/g_{mN}$.

**Common mistake.** Reversing the dependence. A larger $|V_{ov,P}|$ lowers $g_{mP}$ (less offset) but raises the minimum $V_{SD}$ of the loads (less swing).

**Common mistake.** Making the loads "weak" by narrowing them at a fixed length. This raises $\Delta V_{TH,P} \propto 1/\sqrt{WL}$ in proportion to the overdrive, so the referred term $\Delta V_{TH,P}V_{ov,N}/|V_{ov,P}|$ does not improve; the devices should be lengthened instead.
