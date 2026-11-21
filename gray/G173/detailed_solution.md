# Detailed solution - G173

Write every node of the bias circuit of [Fig. 2] in terms of a common overdrive magnitude $V_{ov}$, using $|V_{GS}|=|V_t|+|V_{ov}|$ for each device in the active region. Then compare each non-diode device's $|V_{DS}|$ with $|V_{ov}|$ (and with $|V_{ov}|+0.1$ V for the margin). Diode-connected devices have $|V_{DS}|=|V_{GS}|>|V_{ov}|$ and can never leave the active region, so only the non-diode devices need checking. The total supply is $V_{DD}+V_{SS}=3.3$ V and $|V_t|=0.7$ V.

### Step 1 — Node voltages of the bias circuit

- $M_{102}$ and $M_{101}$ are stacked n-channel diodes carrying $I_{BIAS}$: $V_{BIAS4}=-V_{SS}+V_t+V_{ov}$, and the common gate of $M_{101}$, $M_{104}$, $M_{109}$ is at $-V_{SS}+2(V_t+V_{ov})$.
- The sources of $M_{104}$ and $M_{109}$ sit one $V_{GS}$ below that gate: $-V_{SS}+V_t+V_{ov}$. These are the drains of $M_{103}$ and $M_{110}$.
- $M_{107}$ and $M_{108}$ are stacked p-channel diodes carrying the current of $M_{109}$: $V_{BIAS1}=V_{DD}-(|V_t|+|V_{ov}|)$, and the drain of $M_{108}$, which is also the drain of $M_{109}$, is at $V_{DD}-2(|V_t|+|V_{ov}|)$.
- $V_{BIAS2}$ holds the drains of $M_3$, $M_4$ at $|V_{DS}|=|V_{ov}|+0.1$ V, so $V_{BIAS2}=V_{DD}-|V_{ov}|-0.1$ V. The drain of $M_{104}$ (the gate and drain of $M_{105}$) is one $|V_{GS}|$ lower: $V_{DD}-|V_t|-2|V_{ov}|-0.1$ V.
- By mirror symmetry, $V_{BIAS3}=-V_{SS}+V_{ov}+0.1$ V, and the drain of $M_{112}$ (gate and drain of $M_{113}$) is at $-V_{SS}+V_t+2V_{ov}+0.1$ V, while the source of $M_{112}$ (drain of $M_{111}$) is at $V_{DD}-(|V_t|+|V_{ov}|)$.

### Step 2 — Drain-source voltages of the non-diode devices

Subtracting the node voltages of Step 1, with $V_{DD}+V_{SS}=3.3$ V:

$$
\begin{aligned}
V_{DS109}&=\bigl[V_{DD}-2(|V_t|+|V_{ov}|)\bigr]-\bigl[-V_{SS}+V_t+V_{ov}\bigr]=3.3\ \mathrm V-3(0.7\ \mathrm V+V_{ov})=1.2\ \mathrm V-3V_{ov},\\
V_{DS104}&=\bigl[V_{DD}-|V_t|-2|V_{ov}|-0.1\ \mathrm V\bigr]-\bigl[-V_{SS}+V_t+V_{ov}\bigr]=1.8\ \mathrm V-3V_{ov}.
\end{aligned}
$$

| Device | $\lvert V_{DS}\rvert$ | Active ($\ge V_{ov}$) up to | With 0.1-V margin up to |
|---|---|---|---|
| $M_{109}$ | $1.2\ \mathrm V-3V_{ov}$ | 0.30 V | 0.275 V |
| $M_{104}$, $M_{112}$ | $1.8\ \mathrm V-3V_{ov}$ | 0.45 V | 0.425 V |
| $M_{103}$, $M_{110}$, $M_{111}$ | $0.7\ \mathrm V+V_{ov}$ | always | always |
| diodes $M_{101}$, $M_{102}$, $M_{105}$, $M_{107}$, $M_{108}$, $M_{113}$ | $0.7\ \mathrm V+V_{ov}$ | always | always |

### Step 3 — Which device enters the triode region first

$M_{109}$ has the smallest $V_{DS}$: its branch from $-V_{SS}$ to $V_{DD}$ contains three gate-source drops ($M_{109}$'s source is one $V_{GS}$ above $-V_{SS}$, its drain two $V_{GS}$ below $V_{DD}$) plus its own drain-source voltage. Setting $V_{DS109}=V_{ov}$:

$$
1.2\ \mathrm V-3V_{ov}=V_{ov}\;\Rightarrow\;V_{ov}=0.30\ \mathrm V,
$$

and the 100-mV margin is lost already at $1.2\ \mathrm V-3V_{ov}=V_{ov}+0.1$ V, i.e. $V_{ov}=0.275$ V. Hence **$M_{109}$ enters the triode region first**, at an overdrive of about 0.3 V (0.275 V with the margin). The next limit, $M_{104}$ and $M_{112}$, is not reached until about 0.43 V.

### Step 4 — Redesign of the bias circuit

The cure is to remove one stacked $V_{GS}$ from the $M_{109}$ branch. Two ways:

- Generate $V_{BIAS1}$ and the gate voltage of $M_{112}$ in separate branches. A single diode-connected p-channel device ($M_{107}$) fed by its own n-channel current source gives $V_{BIAS1}$; another p-channel device (a diode with reduced $W/L$, or a diode plus a triode device as in $M_{105}$/$M_{106}$) biases the gate of $M_{112}$. Each branch then holds at most two gate-source drops plus one overdrive between the rails, e.g. $V_{DS109}=3.3\ \mathrm V-2(0.7\ \mathrm V+V_{ov})$, so this branch allows $V_{ov}$ well above 0.4 V and $M_{104}$/$M_{112}$ at about 0.43 V become the new limit.
- Or bias the n-channel cascode pair $M_{109}$/$M_{110}$ (and $M_{103}$/$M_{104}$) in a high-swing way, so that $M_{110}$ runs at $V_{DS}=V_{ov}+0.1$ V instead of $V_t+V_{ov}$. This frees one threshold: $V_{DS109}=3.3\ \mathrm V-2|V_t|-3V_{ov}-0.1\ \mathrm V=1.8\ \mathrm V-3V_{ov}$, raising the limit to about 0.43 V, equal to that of $M_{104}$/$M_{112}$.

### Step 5 — Disadvantages of the modified circuit

- Extra bias branches draw extra current (power) and need extra area.
- More separately generated bias voltages track the threshold and overdrive less well over process, temperature and mismatch: level shifts made by $W/L$ ratios or triode devices follow $V_{ov}$ only approximately, and the body effect neglected in the sizing shifts them further.
- If cascodes are removed from some bias current sources, those currents depend more on $V_{DS}$ through channel-length modulation, lowering bias accuracy and supply rejection.
- More internal nodes may need start-up and settling care.
