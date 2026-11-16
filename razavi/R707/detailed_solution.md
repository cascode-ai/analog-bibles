# Detailed solution - R707

**Approach.** A current mirror copies accurately only if the two transistors are identical *and* at the same temperature, because $V_{TH}$ and $\mu$ both depend on temperature. [Fig. 1] distributes a gate **voltage** generated at one location to transistors at other temperatures; [Fig. 2] distributes **currents** and mirrors locally. Quantify the temperature error of [Fig. 1] with the square law, show why it cancels in [Fig. 2], and then consider the wire resistances.

### Step 1 — Temperature dependence at fixed $V_{GS}$

With $I_D = \tfrac12\mu(T)C_{ox}(W/L)(V_{GS} - V_{TH}(T))^2$, mobility falls as $\mu \propto T^{-3/2}$,

$$\frac{1}{\mu}\frac{d\mu}{dT} = -\frac{3}{2T} = -\frac{1.5}{300\ \mathrm{K}} = -0.5\ \%/\mathrm{K}\quad\text{at } 300\ \mathrm{K},$$

and the threshold falls as $dV_{TH}/dT = -\kappa$, $\kappa \approx 1$–$2$ mV/K. At **fixed** $V_{GS}$:

$$\frac{1}{I_D}\frac{dI_D}{dT} = \frac{1}{\mu}\frac{d\mu}{dT} + \frac{2}{V_{GS} - V_{TH}}\left(-\frac{dV_{TH}}{dT}\right) = -\frac{3}{2T} + \frac{2\kappa}{V_{ov}}.$$

The effects have opposite signs: a hotter device has lower mobility but a larger overdrive. At typical overdrives the threshold term wins.

### Step 2 — The error in [Fig. 1]

$M_{REF}$ at $T_0$ sets $V_{GS}$ so that its own current is $I_{REF}$. A remote device $M_k$ (same size, for simplicity) at $T_k = T_0 + \Delta T$ receives the **same** $V_{GS}$:

$$\frac{I_k}{I_{REF}} = \frac{\mu(T_k)}{\mu(T_0)}\left[\frac{V_{GS} - V_{TH}(T_k)}{V_{GS} - V_{TH}(T_0)}\right]^2 .$$

With $V_{TH}(T_k) = V_{TH}(T_0) - \kappa\Delta T$ and $\mu(T_k)/\mu(T_0) \approx 1 - 1.5\,\Delta T/T_0$, to first order in $\Delta T$:

$$\frac{I_k}{I_{REF}} \approx \left(1 - \frac{1.5\,\Delta T}{T_0}\right)\left(1 + \frac{\kappa\,\Delta T}{V_{ov}}\right)^2 \approx 1 + \left(\frac{2\kappa}{V_{ov}} - \frac{1.5}{T_0}\right)\Delta T,$$

$$\frac{\Delta I}{I} \approx \left(\frac{2\kappa}{V_{ov}} - \frac{1.5}{T_0}\right)\Delta T .$$

**Numbers** ($V_{ov} = 0.2$ V, $T_0 = 300$ K):

$$
\begin{aligned}
\kappa = 1\ \mathrm{mV/K}:&\quad \frac{2(1\ \mathrm{mV/K})}{0.2\ \mathrm{V}} - 0.5\ \%/\mathrm{K} = 1\ \%/\mathrm{K} - 0.5\ \%/\mathrm{K} = +0.5\ \%/\mathrm{K},\\
\kappa = 2\ \mathrm{mV/K}:&\quad 2\ \%/\mathrm{K} - 0.5\ \%/\mathrm{K} = +1.5\ \%/\mathrm{K}.
\end{aligned}
$$

Each kelvin between $M_{REF}$ and $M_k$ thus shifts $I_k$ by roughly 0.5–1.5 %. A modest 5-K gradient across a large die (common near power-hungry blocks) gives 2.5–7.5 % of **systematic** error, which changes with time as the chip's activity (and its heat map) changes. Sharing one $V_{GS}$ does **not** cancel this: it is exactly what transmits the reference's temperature-dependent $V_{GS}$ to devices at other temperatures.

**Wire resistance makes [Fig. 1] worse.** The bias currents of all blocks return through the shared ground line, so the source of each $M_k$ sits above the reference's ground by the accumulated IR drop, lowering its current by $g_m\times(\text{drop})$. The wire's own temperature coefficient (about +0.3 to +0.4 %/K for aluminium) makes this error temperature dependent too. (Noise and supply bounce on the long gate line are also shared by all blocks.)

### Step 3 — Why [Fig. 2] is insensitive to the gradient

**Generating the currents.** $M_{0a}$ and $M_{0b}$ are adjacent, at the same temperature, so $I_{REF1} = I_{REF2}$ (up to random mismatch); their common temperature dependence affects all blocks equally.

**Transporting the currents.** A resistor in series with a current source (the high-impedance drain of $M_{0a}$ or $M_{0b}$) does not change the current. The wire drop only reduces the headroom of $M_{0a}$, $M_{0b}$, harmless while they stay saturated (a small drain-voltage difference causes only a $\lambda\Delta V_{DS}$ error).

**Local mirroring.** At circuit $k$, $M_{REFk}$ and $M_k$ are side by side at the same $T_k$, with their sources joined locally. The diode develops whatever $V_{GS}$ carries $I_{REFk}$ **at $T_k$**, and $M_k$ has the same $\mu$ and $V_{TH}$:

$$\frac{I_k}{I_{REFk}} = \frac{\tfrac12\mu(T_k)C_{ox}(W/L)_k(V_{GS} - V_{TH}(T_k))^2}{\tfrac12\mu(T_k)C_{ox}(W/L)_{REFk}(V_{GS} - V_{TH}(T_k))^2} = \frac{(W/L)_k}{(W/L)_{REFk}} .$$

All temperature-dependent factors cancel; only the tiny gradient across the few micrometres of each local mirror remains. Because the two share a local source connection, IR drops on a global ground line also cancel.

### Step 4 — Residual errors of [Fig. 2]

- Random mismatch between $M_{0a}$ and $M_{0b}$, and between each $M_{REFk}$ and $M_k$.
- Small local temperature differences within each mirror pair.
- Channel-length modulation of $M_{0a}$, $M_{0b}$ if their drain voltages differ (different wire drops and diode voltages).
- Noise pickup on the long current-carrying lines; local bypass capacitors at the diode nodes help.
- The cost: one reference branch ($M_{0x}$ plus $M_{REFk}$) and one long line per block.

### Result

**[Fig. 2] is much better in the presence of temperature gradients.**

- In [Fig. 1], one gate–source voltage, set by $M_{REF}$ at its own temperature, is applied to devices at other temperatures. Since $V_{TH}$ and $\mu$ vary with temperature, each remote current drifts by about $\Delta I/I \approx (2|dV_{TH}/dT|/V_{ov} - 1.5/T)\Delta T \approx 0.5$–$1.5\ \%/\mathrm{K}$ (for $V_{ov} \approx 0.2$ V). The ground-line IR drops add further, also temperature-dependent, errors.
- In [Fig. 2], the reference is transported as a current (insensitive to wire resistance), and each mirror's diode device sits next to the device it biases, at the same temperature and on the same local ground, so the copy ratio $(W/L)_k/(W/L)_{REFk}$ is preserved regardless of the global gradient.

**Common mistake.** Arguing that the temperature dependence cancels in [Fig. 1] because "all devices share the same $V_{GS}$". The same voltage on transistors with different thresholds and mobilities gives *different* currents; cancellation needs the diode and the copying device at the same temperature, as in [Fig. 2].

**Common mistake.** Comparing the circuits only by the ground-line IR drop. That error exists, but the temperature gradient affects [Fig. 1] even with ideal wires.

**Common mistake.** Getting the sign wrong. $V_{TH}$ *decreases* with temperature, so a hotter remote device at the same $V_{GS}$ has a *larger* overdrive, which at moderate overdrives outweighs the mobility reduction: its current rises.
