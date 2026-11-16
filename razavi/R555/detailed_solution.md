# Detailed solution - R555

**Approach.** Find the dc voltage of every OTA node, using the facts that the OTA inputs sit at $V_X = V_Y \approx |V_{BE1}|$ and that its output must equal the gate voltage of $M_3$, $M_4$. Then write the saturation condition of each OTA transistor (and of the tail current source). Each condition either restricts the input level or sets a lower bound on $V_{DD}$, and we compare these bounds with the core's own requirement.

### Step 1 — DC levels in the circuit

Reading the figure:

- **Core.** $M_3$ feeds X, which connects to $R_3$ and the emitter of $Q_1$ (pnp, base and collector grounded). $M_4$ feeds Y, which connects to $R_2$ and, through $R_1$, to the emitter of $Q_2$. The loop forces $V_X = V_Y$.
- **OTA.** $M_a$ (gate at X) and $M_b$ (gate at Y) are the NMOS input pair, with sources joined at the tail current source $I_{SS}$. $M_d$ is diode-connected: its gate and drain form node P, which is also the drain of $M_b$. $M_c$ mirrors $M_d$, and the drain of $M_c$/$M_a$ is the OTA output, which drives the gates of $M_3$ and $M_4$.

The dc node voltages are:

| Node | Voltage | Reason |
|---|---|---|
| X, Y (OTA inputs) | $V_X = V_Y = \lvert V_{BE1}\rvert \approx 0.7$–0.8 V | X is the emitter of $Q_1$, whose base is grounded |
| Tail (sources of $M_a$, $M_b$) | $V_S = \lvert V_{BE1}\rvert - V_{GS,a}$ | one $V_{GS}$ below the inputs |
| P (drain of $M_b$) | $V_P = V_{DD} - \lvert V_{GS,d}\rvert$ | $M_d$ is diode-connected |
| OTA output (drain of $M_a$) | $V_{out} = V_{DD} - \lvert V_{GS3}\rvert$ | must equal the gate voltage of $M_3$, $M_4$ |

Here $V_{GS}$ is a gate–source voltage, $V_{ov} = V_{GS} - V_{TH}$ the overdrive, and a MOSFET is saturated when $V_{DS} \ge V_{ov}$.

### Step 2 — What the core alone needs

The branch $V_{DD} \to M_3 \to X \to Q_1 \to$ ground needs

$$V_{DD} \ge |V_{BE1}| + |V_{DS3}|.$$

$M_3$ only has to stay saturated, which a wide device with a very small overdrive manages with $|V_{DS3}| \approx 50$ mV:

$$V_{DD,min}(\text{core}) \approx 0.7\text{--}0.8\ \mathrm{V} + 0.05\ \mathrm{V} = 0.75\text{--}0.85\ \mathrm{V}.$$

### Step 3 — Constraint 1: the input common-mode level (input side)

The tail current source needs a minimum voltage $V_{DS,ISS(min)}$ (about its own overdrive) to stay saturated. From the table, $V_S = |V_{BE1}| - V_{GS,a}$, so

$$|V_{BE1}| - V_{GS,a} \ge V_{DS,ISS(min)} \quad\Longleftrightarrow\quad V_{GS,a} + V_{DS,ISS(min)} \le |V_{BE1}| .$$

This condition does not contain $V_{DD}$; raising the supply does not help. The bandgap core fixes the input level at one $V_{BE}$, and the input pair plus the tail must fit underneath it.

**Numbers.** With $V_{TH,n} = 0.7$ V, an overdrive of 0.1 V and $V_{DS,ISS(min)} = 0.1$ V:

$$V_{GS,a} + V_{DS,ISS(min)} = (0.7 + 0.1) + 0.1 = 0.9\ \mathrm{V} > 0.7\text{--}0.8\ \mathrm{V}.$$

The condition is violated. Even with the overdrive pushed toward zero and $V_{DS,ISS} = 50$ mV, it needs 0.75 V, which is barely met at $|V_{BE1}| = 0.8$ V and fails at 0.7 V. The margin also shrinks at high temperature, where $|V_{BE}|$ drops by about 1.5–2 mV/K (only partly offset by the fall of $V_{TH}$), so it must be checked over the full temperature range. In practice the input pair needs **low-threshold (or native) devices, or operation in subthreshold**.

### Step 4 — Constraint 2: saturation of $M_b$ (load side)

$M_b$ has its gate at $V_Y$ and its drain at $V_P = V_{DD} - |V_{GS,d}|$. Saturation of an NMOS, $V_{DS} \ge V_{GS} - V_{TH,n}$, is the same as $V_D \ge V_G - V_{TH,n}$ (the drain may sit at most one threshold below the gate):

$$
\begin{aligned}
V_{DD} - |V_{GS,d}| &\ge V_Y - V_{TH,n}\\
V_{DD} &\ge |V_{BE1}| + |V_{GS,d}| - V_{TH,n}.
\end{aligned}
$$

### Step 5 — Constraint 3: saturation of $M_a$ (output side)

$M_a$ has its gate at $V_X$ and its drain at the OTA output, which must sit at $V_{DD} - |V_{GS3}|$ to bias $M_3$ and $M_4$:

$$
\begin{aligned}
V_{DD} - |V_{GS3}| &\ge V_X - V_{TH,n}\\
V_{DD} &\ge |V_{BE1}| + |V_{GS3}| - V_{TH,n}.
\end{aligned}
$$

Constraints 2 and 3 have the same form. Writing $|V_{GS,P}| = |V_{TH,p}| + |V_{ov,P}|$ for the gate–source voltage of the PMOS devices ($M_d$ or $M_3$):

$$V_{DD} \ge |V_{BE1}| + |V_{GS,P}| - V_{TH,n} = |V_{BE1}| + |V_{ov,P}| + \left(|V_{TH,p}| - V_{TH,n}\right).$$

**Physical meaning.** The PMOS gate–source drop hangs down from $V_{DD}$, and the NMOS input devices must stay saturated below it. Their drains may sit up to one $V_{TH,n}$ *below* their gates, which helps, but only $V_{TH,n}$'s worth.

**Numbers** ($|V_{TH,p}| - V_{TH,n} = 0.8 - 0.7 = 0.1$ V):

| $\lvert V_{ov,P}\rvert$ | $V_{DD,min}$ for $\lvert V_{BE1}\rvert = 0.7$ V | $V_{DD,min}$ for $\lvert V_{BE1}\rvert = 0.8$ V |
|---|---|---|
| 0.05 V | $0.7 + 0.05 + 0.1 = 0.85$ V | 0.95 V |
| 0.1 V | 0.90 V | 1.00 V |
| 0.2 V | 1.00 V | 1.10 V |

So the OTA needs about **0.9–1.1 V**, against 0.75–0.85 V for the core alone.

### Step 6 — Constraint 4: the whole OTA stack, and the net penalty

The OTA branch $V_{DD} \to M_d \to M_b \to I_{SS} \to$ ground must also accommodate

$$V_{DD} \ge |V_{GS,d}| + V_{DS,b(min)} + V_{DS,ISS(min)} .$$

This is not independent: adding constraint 1 (the tail headroom) to constraint 2 (the drain of $M_b$) reproduces it, since $V_{DS,b} = V_P - V_S$. It shows that even a perfectly placed input level costs a PMOS $V_{GS}$ plus two saturation voltages, e.g. $0.9 + 0.1 + 0.1 = 1.1$ V.

**Net increase of the minimum supply** (constraint 2 or 3 minus the core requirement):

$$\Delta V_{DD,min} = \left(|V_{BE1}| + |V_{GS,P}| - V_{TH,n}\right) - \left(|V_{BE1}| + |V_{DS3}|\right) = |V_{GS,P}| - V_{TH,n} - |V_{DS3}| .$$

Numerically, $0.8 + |V_{ov,P}| - 0.7 - 0.05 = 0.05\ \mathrm{V} + |V_{ov,P}| \approx 0.15$–0.25 V. The penalty is small only if $V_{TH,n} \approx |V_{TH,p}|$ and the PMOS overdrives are small.

### Result

**Yes**, the five-transistor OTA adds constraints:

1. **Input side (lower input common-mode limit).** The inputs sit at $V_X \approx V_Y \approx |V_{BE1}|$, so $V_{GS,a} + V_{DS,ISS(min)} \le |V_{BE1}|$. This does not involve $V_{DD}$ but is a hard constraint. With $V_{TH,n} = 0.7$ V and $|V_{BE1}| \approx 0.7$–0.8 V there is almost no room, so low-threshold or subthreshold input devices are needed. It gets worse at high temperature, as $|V_{BE}|$ falls by about 1.5–2 mV/K.
2. **Load/output side (upper limit).** $M_b$ stays saturated only if $V_P = V_{DD} - |V_{GS,d}| \ge V_Y - V_{TH,n}$, and $M_a$ (whose drain is the OTA output at $V_{DD} - |V_{GS3}|$) needs $V_{DD} - |V_{GS3}| \ge V_X - V_{TH,n}$. Hence
$$V_{DD} \ge |V_{BE1}| + |V_{GS,P}| - V_{TH,n} = |V_{BE1}| + |V_{ov,P}| + (|V_{TH,p}| - V_{TH,n}),$$
about 0.9–1.1 V with these thresholds and small overdrives, versus about 0.8 V for the core alone.
3. **Overall stack** of the OTA: $V_{DD} \ge |V_{GS,c}| + V_{DS,a} + V_{DS,ISS}$ (with $|V_{GS,c}| = |V_{GS,d}|$, the same as the $M_b$ side).

The OTA thus raises the minimum supply by about $|V_{GS,P}| - V_{TH,n} - |V_{DS3}|$, and its input stage must fit within $|V_{BE1}|$.

**Common mistake.** Answering "no" because the OTA only drives gates and needs "a few hundred millivolts". The OTA's input level is not free: the core pins it at one $V_{BE}$, and the NMOS input pair plus the tail source must fit below that. Its output level is pinned too, at $V_{DD} - |V_{GS3}|$.

**Common mistake.** Getting the direction of the input-range condition wrong, for example requiring the input level to exceed $V_{DD} - |V_{TH,p}|$. For an NMOS-input OTA the binding limit here is the *lower* one ($V_{GS} + V_{DS,tail}$). The upper limit, set by the PMOS load, turns into a lower bound on $V_{DD}$.

**Common mistake.** Forgetting that an NMOS drain may sit up to $V_{TH,n}$ below its gate in saturation, and requiring $V_{DD} \ge |V_{BE1}| + |V_{GS,P}|$ (about 1.6 V). The correct bound subtracts $V_{TH,n}$, which is why the penalty is only about 0.15–0.25 V.
