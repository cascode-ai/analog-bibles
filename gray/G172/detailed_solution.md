# Detailed solution - G172

Extend the folded cascode by one more cascode device on each side of the output, and bias every cascode gate so that the devices beneath it sit exactly at the edge of the active region. Each side of the output then needs only three overdrives. With equal overdrives, the square law fixes every $W/L$ from its current and mobility.

### Step 1 — Schematic and current ratios

- Input stage: p-channel pair $M_1$, $M_2$ with sources at node S, tail source $M_5$ from $V_{DD}$ (gate $V_{BIAS1}$). The drains of $M_1$, $M_2$ are the folding nodes, loaded by n-channel sinks $M_{11}$, $M_{12}$ to $-V_{SS}$ (gate $V_{BIAS3}$).
- n-side cascodes: $M_{1A}$ then $M_{1B}$ stacked on $M_{11}$, and $M_{2A}$ then $M_{2B}$ on $M_{12}$; gates at $V_{CN1}$ ($M_{1A}$, $M_{2A}$) and $V_{CN2}$ ($M_{1B}$, $M_{2B}$).
- p-side load: triple-stack mirror $M_3$/$M_{3A}$/$M_{3B}$ (input side, drain of $M_{3B}$ = node X = drain of $M_{1B}$) and $M_4$/$M_{4A}$/$M_{4B}$ (output side, drain of $M_{4B}$ = output = drain of $M_{2B}$). The gates of $M_3$, $M_4$ connect to X; the gates of $M_{3A}$, $M_{4A}$ go to $V_{CP1}$ and those of $M_{3B}$, $M_{4B}$ to $V_{CP2}$.
- Bias generators: six diode-connected devices, each fed by a current $I$ (n-channel diodes from $-V_{SS}$ fed from $V_{DD}$; p-channel diodes from $V_{DD}$ draining to $-V_{SS}$).

<!-- diagram: diagram-01.cir -->

Assume $|I_{D1}|=|I_{D2}|=I$, $|I_{D5}|=2I$ and $I_{D11}=I_{D12}=2I$, so each cascode branch and the mirror carry $I$ at balance, and each bias diode carries $I$.

### Step 2 — Cascode bias voltages for maximum swing

A saturated device needs $|V_{DS}|\ge|V_{ov}|$ and has $|V_{GS}|=|V_t|+|V_{ov}|$. To place $M_{11}$ and $M_{1A}$ each at $V_{DS}=V_{ov}$, the sources of $M_{1A}$ and $M_{1B}$ must be at $-V_{SS}+V_{ov}$ and $-V_{SS}+2V_{ov}$, so

$$
V_{BIAS3}=-V_{SS}+V_t+V_{ov},\qquad
V_{CN1}=-V_{SS}+V_t+2V_{ov},\qquad
V_{CN2}=-V_{SS}+V_t+3V_{ov}.
$$

On the p side, $M_3$ conducts $I$ with $V_{SG3}=|V_t|+|V_{ov}|$ because its gate is at X. Placing $M_3$ and $M_{3A}$ each at $V_{SD}=|V_{ov}|$ requires

$$
V_{CP1}=V_{DD}-|V_t|-2|V_{ov}|,\qquad V_{CP2}=V_{DD}-|V_t|-3|V_{ov}|.
$$

Since the mirror's gate-source drop is not in the stack, no threshold enters the output limits. On the input side, $V_X=V_{DD}-|V_t|-|V_{ov}|$ and the source of $M_{3B}$ is at $V_{DD}-2|V_{ov}|$, so $V_{SD,3B}=|V_t|-|V_{ov}|$; $M_{3B}$ stays active provided $|V_t|\ge2|V_{ov}|$.

A diode-connected device fed with current $I$ has $V_{GS}=V_t+\sqrt{2I/[\mu C_{ox}(W/L)]}$. Relative to a diode sized for overdrive $V_{ov}$ at $I$, dividing $W/L$ by 4 doubles the overdrive and by 9 triples it, giving $V_t+2V_{ov}$ and $V_t+3V_{ov}$.

### Step 3 — $W/L$ ratios

For equal overdrives the square law gives

$$
\frac WL=\frac{2|I_D|}{\mu C_{ox}V_{ov}^2}\;\Rightarrow\;
\frac{(W/L)}{(W/L)_1}=\frac{|I_D|}{I}\cdot\frac{\mu_pC_{ox}}{\mu C_{ox}},
\qquad \frac{\mu_pC_{ox}}{\mu_nC_{ox}}=\frac{64.7\ \mu\mathrm{A/V^2}}{194\ \mu\mathrm{A/V^2}}=0.3335\approx\frac13 .
$$

For example $M_{11}$: $(W/L)_{11}=(2)(1/3)(W/L)_1=\tfrac23(W/L)_1$. The rest:

| Devices | Type | Current | Overdrive | $W/L$ in units of $(W/L)_1$ |
|---|---|---|---|---|
| $M_1$, $M_2$ | p | $I$ | $\lvert V_{ov}\rvert$ | 1 |
| $M_5$ | p | $2I$ | $\lvert V_{ov}\rvert$ | 2 |
| $M_3$, $M_4$, $M_{3A}$, $M_{4A}$, $M_{3B}$, $M_{4B}$ | p | $I$ | $\lvert V_{ov}\rvert$ | 1 |
| $M_{11}$, $M_{12}$ | n | $2I$ | $V_{ov}$ | 2/3 |
| $M_{1A}$, $M_{2A}$, $M_{1B}$, $M_{2B}$ | n | $I$ | $V_{ov}$ | 1/3 |
| $V_{BIAS1}$ diode | p | $I$ | $\lvert V_{ov}\rvert$ | 1 |
| $V_{CP1}$ diode | p | $I$ | $2\lvert V_{ov}\rvert$ | 1/4 |
| $V_{CP2}$ diode | p | $I$ | $3\lvert V_{ov}\rvert$ | 1/9 |
| $V_{BIAS3}$ diode | n | $I$ | $V_{ov}$ | 1/3 |
| $V_{CN1}$ diode | n | $I$ | $2V_{ov}$ | 1/12 |
| $V_{CN2}$ diode | n | $I$ | $3V_{ov}$ | 1/27 |

### Step 4 — Output swing

At the top, $M_4$ and $M_{4A}$ each take $|V_{ov}|$, and $M_{4B}$ stays active while its $V_{SD}\ge|V_{ov}|$:

$$
V_O\le V_{DD}-3|V_{ov}| .
$$

At the bottom, $M_{12}$ and $M_{2A}$ each take $V_{ov}$, and $M_{2B}$ needs $V_{DS}\ge V_{ov}$:

$$
V_O\ge -V_{SS}+3V_{ov} .
$$

The output therefore swings over $-V_{SS}+3V_{ov}\le V_O\le V_{DD}-3|V_{ov}|$, a peak-to-peak swing of $V_{DD}+V_{SS}-6|V_{ov}|$. Compared with the single-cascode version, each end loses one more overdrive, while the output resistance, and hence the gain, rises by roughly another factor $g_mr_o$.
