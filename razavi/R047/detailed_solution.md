# Detailed solution - R047

**Approach.** Identify the terminals of the PMOS in the figure, write its gate–source voltage in terms of the voltage at the output terminal, and look at how the current $I_1$ depends on that voltage, both with the large-signal square law and with the small-signal impedance. A current source needs a current that does *not* depend on the terminal voltage, i.e. a very high impedance.

### Step 1 — Reading the circuit

The figure shows a PMOS transistor with:

- its **gate** connected to ground;
- its **drain** (lower terminal) connected to ground;
- its **source** (upper terminal, with the arrow) brought out as the output terminal; the current $I_1$ flows *into* this terminal.

Call the voltage of the output terminal $V_{out}$ (with respect to ground). In a PMOS, current flows from source to drain, so $I_1$ enters the source, crosses the channel and leaves at the grounded drain. The structure is a two-terminal device between the output node and ground, and the question is whether $I_1$ stays constant as $V_{out}$ changes, which is what a current source must do.

### Step 2 — Terminal voltages: why it is always saturated

For a PMOS we use the source-referenced voltages $V_{SG}$ (source–gate) and $V_{SD}$ (source–drain):

$$V_{SG} = V_{out} - 0 = V_{out}, \qquad V_{SD} = V_{out} - 0 = V_{out} .$$

The device conducts when $V_{SG} > |V_{TH}|$, where $|V_{TH}|$ is the magnitude of the PMOS threshold voltage. It is **saturated** when

$$V_{SD} \ge V_{SG} - |V_{TH}| .$$

Since $V_{SD} = V_{SG}$, this reads $V_{SG} \ge V_{SG} - |V_{TH}|$, which is always true. So whenever it conducts, the transistor is saturated, as the problem states. The gate and drain are tied together (both at ground): the transistor is **diode-connected**.

### Step 3 — Large-signal current: strong dependence on $V_{out}$

The **square-law saturation current** of the PMOS (with channel-length modulation neglected for now) is

$$I_1 = \frac12\,\mu_pC_{ox}\frac{W}{L}\,(V_{SG} - |V_{TH}|)^2 ,$$

with $\mu_pC_{ox}$ the PMOS process transconductance parameter and $W/L$ the aspect ratio. Substituting $V_{SG} = V_{out}$:

$$I_1 = \frac12\,\mu_pC_{ox}\frac{W}{L}\,(V_{out} - |V_{TH}|)^2 .$$

The current is a **quadratic function of the terminal voltage**. "Saturation" makes the current insensitive to $V_{SD}$ only when $V_{SG}$ is held constant. Here the terminal voltage *is* $V_{SG}$, so every change of $V_{out}$ changes the gate drive one-for-one.

**Illustration** (assumed values: $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$, $W/L = 50$, $|V_{TH}| = 0.8$ V, bulk tied to the source). Then $\mu_pC_{ox}W/L = 1.92\ \mathrm{mA/V^2}$, and for example at $V_{out} = 1.5$ V:

$$I_1 = \tfrac12(1.92\ \mathrm{mA/V^2})(1.5 - 0.8\ \mathrm{V})^2 = 0.96\times0.49\ \mathrm{mA} = 0.47\ \mathrm{mA}.$$

| $V_{out}$ (V) | 1.0 | 1.2 | 1.5 | 2.0 | 2.5 |
|---|---|---|---|---|---|
| $I_1$ (mA) | 0.038 | 0.154 | 0.47 | 1.38 | 2.77 |

A 1-V change in $V_{out}$ (1.5 V to 2.5 V) changes the "source" current by a factor of six. A real current source would keep $I_1$ nearly constant.

### Step 4 — Small-signal impedance seen at the terminal

The quality of a current source is measured by its small-signal output impedance: the higher it is, the less the current changes when the terminal voltage changes.

**Small-signal model.** Gate and drain are at ground. Apply a small test voltage $v_x$ at the source (output) node and find the current $i_x$ flowing into it. The transistor is represented by a controlled current source $g_mv_{gs}$ flowing from drain to source, in parallel with the output resistance $r_O$ between drain and source. Here $g_m$ is the transconductance and $v_{gs} = v_g - v_s = 0 - v_x = -v_x$.

<!-- diagram: diagram-01.cir -->

**KCL at the output node.** The current $i_x$ that enters the node leaves through the transistor toward the grounded drain. The controlled source carries $g_mv_{gs} = -g_mv_x$ from drain to source, i.e. $+g_mv_x$ from source to drain, and $r_O$ carries $v_x/r_O$ from source to drain:

$$i_x = g_mv_x + \frac{v_x}{r_O} .$$

Hence the impedance is

$$R_{out} = \frac{v_x}{i_x} = \frac{1}{g_m + 1/r_O} = \frac{1}{g_m}\parallel r_O \approx \frac{1}{g_m}\qquad(g_mr_O \gg 1).$$

The same result follows from Step 3, since $dI_1/dV_{out} = \mu_pC_{ox}(W/L)(V_{out} - |V_{TH}|) = g_m$.

If the bulk (n-well) is tied to $V_{DD}$ instead of the source, the source voltage also changes $V_{BS}$, adding a body-effect current $g_{mb}v_x$, and the impedance drops further to $1/(g_m + g_{mb})\parallel r_O$.

**Numbers.** In the illustration at $V_{out} = 1.5$ V, $g_m = (1.92\ \mathrm{mA/V^2})(0.7\ \mathrm{V}) = 1.34$ mS, so $R_{out} \approx 1/g_m = 744\ \Omega$. A properly connected PMOS current source at the same current would have $R_{out} = r_O = 1/(\lambda I_D)$, for example $1/[(0.2\ \mathrm{V^{-1}})(0.47\ \mathrm{mA})] = 10.6\ \mathrm{k}\Omega$ for $\lambda = 0.2\ \mathrm{V^{-1}}$, about 14 times higher (and much more with a longer device).

### Step 5 — What a current source needs

A MOS current source works because, in saturation, $I_D$ depends on $V_{GS}$ but hardly on $V_{DS}$. This requires:

1. $V_{GS}$ (here $V_{SG}$) **fixed** by a bias network, independently of the output voltage;
2. the output taken at the **drain**, so that the output voltage changes only $V_{DS}$, to which the current is insensitive (impedance $r_O$).

For a PMOS: source at $V_{DD}$, gate at a fixed bias $V_b$, output at the drain, giving $I_D = \tfrac12\mu_pC_{ox}(W/L)(V_{DD} - V_b - |V_{TH}|)^2$, independent of the output voltage to first order. The structure in the figure violates both conditions: the output is the source, and the gate is referred to ground, so $V_{SG}$ equals the output voltage.

### Result

The PMOS is **diode-connected** (gate and drain both grounded) and its **source is the output terminal**. It is always saturated because $V_{SD} = V_{SG}$, but its gate–source voltage is the output voltage itself:

$$I_1 = \tfrac12\mu_pC_{ox}\frac{W}{L}(V_{out} - |V_{TH}|)^2 ,$$

which depends quadratically on the terminal voltage. Equivalently, the impedance seen at the terminal is only $1/g_m\parallel r_O \approx 1/g_m$ (even lower, $1/(g_m + g_{mb})$, if the bulk is at $V_{DD}$). The structure behaves like a nonlinear resistor (a "diode"), not like a current source, which needs a fixed $V_{SG}$ and the output at the drain.

**Common mistake.** Arguing "the transistor is saturated, so its current is constant". Saturation only makes $I_D$ independent of $V_{DS}$ *for a fixed $V_{GS}$*. Here the output voltage sets $V_{SG}$ directly, so the current changes strongly.

**Common mistake.** Blaming triode operation. With $V_{SD} = V_{SG}$ the device can never enter triode; the failure has nothing to do with the region of operation and everything to do with where the output is taken.

**Common mistake.** Misreading the device as an NMOS with a fixed gate bias, or taking the output impedance as $r_O$. The output is at the source of a diode-connected PMOS, so the impedance is $1/g_m$, smaller than $r_O$ by roughly the intrinsic gain $g_mr_O$.
