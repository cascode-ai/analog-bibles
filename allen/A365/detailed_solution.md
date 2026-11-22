# Detailed solution - A365

Translate the three requirements into circuit conditions, check which standard mirrors violate them, and modify the simple mirror accordingly. The requirements are: a minimum input voltage of $V_{ON}$, a minimum output voltage of $V_{ON}$, and excellent matching.

### Step 1 — What the requirements imply

1. $V_{MIN}(in)=V_{ON}$: the input transistor cannot be diode-connected. A diode puts its drain at its gate voltage $V_T+V_{ON}$, whereas the requirement lets the drain go down to $V_{ON}$. The gates must therefore be driven by an amplifier or a level shifter, not by the input drain directly.
2. $V_{MIN}(out)=V_{ON}$: only one transistor may sit between the output and the rail, so the output cannot be cascoded.
3. Excellent matching: with channel-length modulation, $i_{OUT}/i_{in}=(S_2/S_1)(1+\lambda V_{DS2})/(1+\lambda V_{DS1})$, so the input and output transistors must have equal $V_{GS}$ and equal $V_{DS}$ at every output voltage.

### Step 2 — Why the standard mirrors fail

| Mirror | $V_{MIN}(in)$ | $V_{MIN}(out)$ | Matching |
|---|---|---|---|
| Simple | $V_T+V_{ON}$ | $V_{ON}$ | poor, $V_{DS1}\ne V_{DS2}$ |
| Cascode | $V_T+2V_{ON}$ | $V_T+2V_{ON}$ ($2V_{ON}$ with high-swing bias) | good |
| Wilson | $V_T+2V_{ON}$ | $V_T+2V_{ON}$ or $2V_{ON}$ | good |
| Regulated cascode | $V_T+V_{ON}$ | $2V_{ON}$ | excellent |

None meets all three conditions; the cascoded ones fail condition 2 and all fail condition 1 because their input is a diode.

### Step 3 — Amplifier-driven simple mirror

Keep the simple mirror's single output transistor M2 and its input transistor M1 with gates common, and add an amplifier A whose two inputs sense the drains of M1 and M2 and whose output drives the common gate.

<!-- diagram: diagram-01.cir -->

The amplifier is connected for negative feedback around M1: if $i_{in}$ exceeds the current of M1, the drain of M1 rises, the amplifier raises the gate voltage, and M1 conducts more. With high gain the loop forces

$$
V_{D1}=V_{D2}=V_{OUT},
$$

so M1 carries $i_{in}$ at exactly the same $V_{DS}$ as M2, and with equal $V_{GS}$

$$
i_{OUT}=\frac{S_2}{S_1}\,i_{in}
$$

with no channel-length-modulation error; only the $V_T$ and $K'$ mismatch of the two devices remains.

### Step 4 — Minimum voltages and amplifier requirements

Both drains can go down to $V_{ON}$, where M1 and M2 are at the edge of saturation while the gate sits at $V_T+V_{ON}$, so

$$
V_{MIN}(in)=V_{MIN}(out)=V_{ON}.
$$

The amplifier must work with its inputs at $V_{ON}$ above the rail, so its input common-mode range must extend down to about $V_{ON}$; for an n-channel mirror a p-channel input pair is suitable. Its output must reach $V_T+V_{ON}$.

### Step 5 — Other variants

A level shifter (a source follower, or a BJT with a drop of about $V_T$) between the input drain and the common gate holds the input drain one level shift below the gate, giving $V_{MIN}(in)\approx V_{ON}$ with the simple output; matching is then exact only when $V_{OUT}\approx V_{D1}$, so an amplifier that equalizes $V_{D2}$ to $V_{D1}$ is still needed for excellent matching. Equalizing with a regulated cascode on the output preserves matching but raises $V_{MIN}(out)$ to $2V_{ON}$. Bulk-driven mirrors (slightly forward-biased bulk) also lower the input voltage, but match more poorly.
