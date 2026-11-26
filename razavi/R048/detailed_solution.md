# Detailed solution - R048

Approach: Express the NMOS gate–source and source–bulk voltages in terms of the output-terminal voltage, and examine how the current $I_2$ depends on that voltage, with the square law and with the small-signal impedance. A current source must deliver a current that is (nearly) independent of its terminal voltage, i.e. it must have a very high output impedance.

### Step 1 — Terminal voltages and conduction

Call the output-terminal (source) voltage $V_{out}$; the bulk is the grounded p-substrate. Then

$$V_{GS} = V_{DD} - V_{out}, \qquad V_{DS} = V_{DD} - V_{out}, \qquad V_{SB} = V_{out} - 0 = V_{out} .$$

Since $V_{DS} = V_{GS} \ge V_{GS} - V_{TH}$, the transistor is diode-connected and saturated whenever it conducts, as the problem says.

### Step 2 — Large-signal current versus $V_{out}$

With channel-length modulation neglected,

$$I_2 = \frac12\,\mu_nC_{ox}\frac{W}{L}\,(V_{GS} - V_{TH})^2 = \frac12\,\mu_nC_{ox}\frac{W}{L}\,(V_{DD} - V_{out} - V_{TH})^2 ,$$

and, since the source is above the grounded bulk,

$$V_{TH} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{out}} - \sqrt{2|\phi_F|}\right).$$

Raising $V_{out}$ therefore cuts the overdrive $V_{DD} - V_{out} - V_{TH}$ in two ways: $V_{GS}$ falls one-for-one, and $V_{TH}$ rises. The current falls quadratically, and the device turns off completely once $V_{out}$ reaches $V_{DD} - V_{TH}$.

Illustration (assumed values: $V_{DD} = 3$ V, $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$, $W/L = 5$, $V_{TH0} = 0.7$ V, $\gamma = 0.45\ \mathrm{V^{1/2}}$, $2|\phi_F| = 0.9$ V). At $V_{out} = 1$ V:

$$
\begin{aligned}
V_{TH} &= 0.7 + 0.45\left(\sqrt{0.9 + 1.0} - \sqrt{0.9}\right) = 0.7 + 0.45(1.3784 - 0.9487) = 0.893\ \mathrm{V},\\
V_{GS} - V_{TH} &= 3 - 1 - 0.893 = 1.107\ \mathrm{V},\\
I_2 &= \tfrac12(134\ \mu\mathrm{A/V^2})(5)(1.107\ \mathrm{V})^2 = (335\ \mu\mathrm{A/V^2})(1.225\ \mathrm{V^2}) = 0.41\ \mathrm{mA}.
\end{aligned}
$$

| $V_{out}$ (V) | 0 | 0.5 | 1.0 | 1.5 |
|---|---|---|---|---|
| $V_{TH}$ (V) | 0.700 | 0.806 | 0.893 | 0.970 |
| $V_{GS} - V_{TH}$ (V) | 2.30 | 1.69 | 1.11 | 0.53 |
| $I_2$ (mA) | 1.77 | 0.96 | 0.41 | 0.094 |

A 1.5-V change of the output voltage changes $I_2$ by a factor of about 19, the opposite of a current source.

### Step 3 — Small-signal impedance at the output terminal

Assume a grounded bulk, whose terminal is omitted in Fig. 1. The gate and drain are tied to $V_{DD}$, so all three terminals are at ac ground. Apply a test voltage $v_x$ to the output (source) node and find the current $i_x$ the test source delivers into it. Between drain and source the transistor has $g_mv_{gs}$ with $v_{gs} = 0 - v_x = -v_x$, $g_{mb}v_{bs}$ with $v_{bs} = 0 - v_x = -v_x$, and $r_O$ with $v_{ds} = -v_x$.

<!-- diagram: diagram-01.cir -->

The total drain-to-source current inside the transistor arrives at the output node:

$$i_{D\to S} = g_m(-v_x) + g_{mb}(-v_x) + \frac{-v_x}{r_O} = -\left(g_m + g_{mb} + \frac{1}{r_O}\right)v_x .$$

KCL at the output node, $i_x + i_{D\to S} = 0$, gives

$$i_x = \left(g_m + g_{mb} + \frac{1}{r_O}\right)v_x, \qquad R_{out} = \frac{v_x}{i_x} = \frac{1}{g_m + g_{mb}}\parallel r_O \approx \frac{1}{g_m + g_{mb}}\qquad(g_mr_O \gg 1).$$

Numbers (same illustration, $V_{out} = 1$ V):

$$
\begin{aligned}
g_m &= \mu_nC_{ox}\frac{W}{L}(V_{GS} - V_{TH}) = (670\ \mu\mathrm{A/V^2})(1.107\ \mathrm{V}) = 0.741\ \mathrm{mS},\\
\eta &= \frac{\gamma}{2\sqrt{2|\phi_F| + V_{SB}}} = \frac{0.45}{2\sqrt{1.9}} = 0.163,\qquad g_{mb} = \eta g_m = 0.121\ \mathrm{mS},\\
R_{out} &\approx \frac{1}{(0.741+0.121)\,\mathrm{mS}} = 1.16\ \mathrm{k}\Omega .
\end{aligned}
$$

A current source at the same current with the output at the drain would present $r_O = 1/(\lambda I_D)$, e.g. $1/[(0.1\ \mathrm{V^{-1}})(0.41\ \mathrm{mA})] = 24\ \mathrm{k}\Omega$ for $\lambda = 0.1\ \mathrm{V^{-1}}$, about 20 times more.

### Step 4 — What a current source needs

An NMOS current source keeps its gate–source voltage fixed (source at ground, gate at a bias voltage $V_b$) and takes the output at the drain, so the output voltage changes only $V_{DS}$ and the output impedance is $r_O$. In the figure the output is the *source* and the gate is tied to a fixed potential, so the output voltage enters $V_{GS}$ directly: the device acts as a source follower with a fixed input (or as a diode), whose output is a low-impedance *voltage*, not a current.

### Result

The NMOS is diode-connected (gate = drain = $V_{DD}$) with its source as the output terminal. While on, it is saturated and its current is

$$I_2 = \tfrac12\mu_nC_{ox}\frac{W}{L}(V_{DD} - V_{out} - V_{TH})^2.$$

With a grounded bulk, body effect raises $V_{TH}$ as $V_{out}$ rises. The overdrive falls as the output voltage rises, and the current drops with the square of the overdrive. The impedance seen at the output is only $\approx 1/(g_m + g_{mb})$ (in parallel with $r_O$), a low value. A current source needs a fixed $V_{GS}$ and the output taken at the drain, where the impedance is $r_O$.

**Common mistake:** "It is saturated, so the current is constant." Saturation makes $I_D$ insensitive to $V_{DS}$ only at a fixed $V_{GS}$; here $V_{GS} = V_{DD} - V_{out}$ moves one-for-one with the output.

**Common mistake:** Claiming the output impedance is $r_O$. Looking into the source of a transistor whose gate is at ac ground gives $1/(g_m + g_{mb})$, smaller than $r_O$ by about the intrinsic gain $g_mr_O$.

**Common mistake:** Attributing the problem to triode operation. With gate and drain tied, $V_{DS} = V_{GS}$ and the device can never enter triode; the problem is the connection, not the region.
