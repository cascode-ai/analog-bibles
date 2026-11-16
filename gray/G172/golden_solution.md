# Golden Solution - G172

## Reference answer

One valid design (currents: $|I_{D1}| = |I_{D2}| = I$, $|I_{D5}| = 2I$, $I_{D11} = I_{D12} = 2I$, so each cascode branch carries $I$; $\mu_n/\mu_p = 3$). It gives an output swing of $-V_{SS} + 3V_{ov} \le V_O \le V_{DD} - 3|V_{ov}|$, i.e. $V_{DD}+V_{SS} - 6|V_{ov}|$ peak-to-peak.

Schematic:
- p-channel input pair $M_1$, $M_2$ with tail source $M_5$ ($V_{BIAS1}$) from $V_{DD}$. Folding current sources $M_{11}$, $M_{12}$ (n-channel, to $-V_{SS}$).
- n cascodes $M_{1A}$/$M_{1B}$ on $M_{11}$ and $M_{2A}$/$M_{2B}$ on $M_{12}$, gates at $V_{CN1}$ and $V_{CN2}$.
- p-channel triple-stack mirror $M_3$/$M_{3A}$/$M_{3B}$ (input side, drain of $M_{3B}$ tied to the drain of $M_{1B}$) and $M_4$/$M_{4A}$/$M_{4B}$ (output side, drain of $M_{4B}$ = output = drain of $M_{2B}$).
- The gates of $M_3$, $M_4$ are tied to the drain of $M_{3B}$ (the mirror input node), so $M_3$ is not limited to $V_{SD} = V_{SG}$. The gates of $M_{3A}$/$M_{4A}$ and $M_{3B}$/$M_{4B}$ go to bias voltages $V_{CP1} = V_{DD} - |V_t| - 2|V_{ov}|$ and $V_{CP2} = V_{DD} - |V_t| - 3|V_{ov}|$, so $M_3$, $M_4$, $M_{3A}$, $M_{4A}$ each sit at $V_{SD} = |V_{ov}|$.
- n-side gate biases: $V_{BIAS3}$ (gates of $M_{11}$, $M_{12}$) $= -V_{SS} + V_t + V_{ov}$; $V_{CN1} = -V_{SS} + V_t + 2V_{ov}$; $V_{CN2} = -V_{SS} + V_t + 3V_{ov}$, so $M_{11}$, $M_{1A}$ (and $M_{12}$, $M_{2A}$) sit at $V_{DS} = V_{ov}$.
- Bias generators: diode-connected devices, each fed with current $I$. A diode with the unit $W/L$ gives $V_t + V_{ov}$; with $W/L$ reduced 4× it gives $V_t + 2V_{ov}$; reduced 9× it gives $V_t + 3V_{ov}$.

W/L (equal overdrive, $W/L \propto |I_D|/\mu$):
- p-channel, current $I$: $M_1$, $M_2$, $M_3$, $M_4$, $M_{3A}$, $M_{4A}$, $M_{3B}$, $M_{4B}$: $1\times(W/L)_1$. $M_5$ ($2I$): $2(W/L)_1$.
- n-channel: $M_{11}$, $M_{12}$ ($2I$): $2\times\frac13 = \frac23(W/L)_1$. $M_{1A}$, $M_{2A}$, $M_{1B}$, $M_{2B}$ ($I$): $\frac13(W/L)_1$.
- Bias diodes (current $I$): p-channel $V_{BIAS1}$ diode $1\times$, $V_{CP1}$ diode $\frac14$, $V_{CP2}$ diode $\frac19$. n-channel $V_{BIAS3}$ diode $\frac13$, $V_{CN1}$ diode $\frac1{12}$, $V_{CN2}$ diode $\frac1{27}$ (all × $(W/L)_1$).

Checks:
- Output high: $M_4$, $M_{4A}$ at $|V_{ov}|$ each plus $M_{4B}$'s overdrive gives $V_O \le V_{DD} - 3|V_{ov}|$. Output low: $M_{12}$, $M_{2A}$ at $V_{ov}$ plus $M_{2B}$ gives $V_O \ge -V_{SS} + 3V_{ov}$.
- On the input side $M_{3B}$ has $V_{SD} = |V_t| - |V_{ov}|$, which needs $|V_t| \ge 2|V_{ov}|$.
- The output resistance and gain rise to about $g_m r_o$ times those of the single-cascode version (gain of order $g_{m1}\,[(g_mr_o)^2 r_o \parallel (g_mr_o)^2(r_{o2}\parallel r_{o12})]$), at the cost of one more overdrive at each end of the swing.

## Grading notes

+2: a consistent schematic with two cascode layers on both sides, a high-swing (wide-swing) mirror/bias arrangement that keeps the lower devices at the edge so the output reaches within $3|V_{ov}|$ of each supply, W/L ratios consistent with equal overdrives ($W/L \propto I/\mu$, n-channel devices ≈ 1/3 of p-channel at equal current) for the stated current ratios, and the swing stated. Other valid bias schemes (e.g. triode-device level shifts, Sooch-type mirrors) and other current ratios are fully acceptable if self-consistent. +1: correct schematic and swing but W/L ratios with one inconsistency (e.g. mobility ratio forgotten for one device class), or bias devices not sized. 0: two cascode layers drawn but a standard (diode-stacked) mirror used, giving a swing reduced by thresholds, with the rest correct. -2 (asserted as fact): a circuit that does not work (cascodes of the wrong polarity, mirror connected so the output branch is diode-connected), claimed swing of $V_{DD} - 2|V_{ov}|$ with three stacked devices, or W/L ratios that contradict equal overdrives (e.g. n-channel devices made 3× wider than p-channel at equal current).
