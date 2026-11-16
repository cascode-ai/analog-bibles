# Golden Solution - A081

## Reference answer

$R_{ON} \approx 690\ \Omega$; loss into 1 kΩ ≈ −4.6 dB. Compared with the single MOSFET switch, the bridge burns static power, isolates worse when off, and adds offset; its advantage is a resistance set by the control current, nearly independent of the signal level, with no clock driving a gate at the signal node.

- Bias: with $v_{in}$ and $v_{out}$ at 0 V dc the bridge is symmetric, so each diode carries 100 µA (no dc current in $R_L$ or in the source).
- $g_m = \sqrt{2K'(W/L)I}$: n-channel $\sqrt{2\times110\ \mu\times100\times100\ \mu} = 1.48$ mS (1/$g_m$ = 674 Ω); p-channel $\sqrt{2\times50\ \mu\times200\times100\ \mu} = 1.41$ mS (707 Ω). A diode-connected device is a resistance $1/g_m$.
- The top rail (M3, M4 sources) and the bottom rail (M1, M2 sources) are tied only through the ideal current source, which is open for small signals. Two paths from $v_{in}$ to $v_{out}$: M3–M4 ($2\times707 = 1414\ \Omega$) and M1–M2 ($2\times674 = 1348\ \Omega$). $R_{ON} = 1414 \| 1348 = 690\ \Omega$.
- Loss: $v_{out}/v_{in} = 1000/(1000 + 690) = 0.592$, i.e. −4.6 dB.
- Comparison with the single switch of [Fig. 2]:
  - Power: the bridge needs $I_{control}$ = 200 µA continuously while on; the MOSFET switch draws no static current.
  - ON resistance: the bridge's $R_{ON}$ is set by $I_{control}$, about $1/g_m$ per diode, and to first order does not depend on $v_{in}$. The MOSFET's $r_{ON} = 1/[K'(W/L)(V_\phi - v_{in} - V_T)]$ changes strongly with $v_{in}$ and body effect. For comparable area a single MOSFET (e.g. 100/1 at 2.5 V overdrive, ≈ 40 Ω) has a much lower $r_{ON}$, while a small switch has more.
  - Large signals: the bridge can deliver at most ≈ $I_{control}$ to the load, so charging $C$ is slew-limited, and $v_{in}$ must leave room for $V_{GS} + V_{SG}$ (about 1.7 V) to the supplies. Mismatch between the two paths gives a dc offset.
  - OFF state: with $I_{control}$ = 0 the diodes turn off, but the large devices (100/1 and 200/1) present large capacitances from $v_{in}$ to $v_{out}$, so more signal couples through during OFF than through a small single switch. The control-current transitions also inject charge.

## Grading notes

Credit split: about half for $R_{ON}$ and the loss, half for the comparison. +2: $R_{ON}$ = 670–710 Ω (two parallel paths of two $1/g_m$ each, 100 µA per diode), loss −4.4 to −4.7 dB, and a comparison with at least three valid points (static power, OFF-state feedthrough through the large device capacitances, $R_{ON}$ set by the bias current and nearly signal-independent, current-limited charging/headroom, offset). +1: correct numbers with a comparison of only one or two valid points, or a good comparison with a slip in the numbers. 0: numbers wrong but the comparison sound, or numbers right with no comparison. −2 (asserted as fact): $R_{ON}$ from all four diodes in series (≈ 2.8 kΩ), from a single diode, or from 200 µA per diode presented as the result; the bridge said to consume no power; or a resistance near 1.6 kΩ with a −8.3 dB loss, which the data do not give.
