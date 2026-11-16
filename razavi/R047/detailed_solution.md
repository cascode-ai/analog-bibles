# Detailed solution - R047

**Approach.** Write the PMOS source–gate voltage in terms of the voltage at the output terminal, and see how $I_1$ depends on that voltage, both with the large-signal square law and through the small-signal impedance. A current source needs a current that does *not* depend on the terminal voltage, i.e. a very high impedance.

### Step 1 — Terminal voltages: always saturated

Call the voltage of the output terminal (the PMOS source) $V_{out}$. With gate and drain both grounded,

$$V_{SG} = V_{out} - 0 = V_{out}, \qquad V_{SD} = V_{out} - 0 = V_{out} .$$

Since $V_{SD} = V_{SG} \ge V_{SG} - |V_{TH}|$, the transistor is saturated whenever it conducts, as the problem states: it is **diode-connected**.

### Step 2 — Large-signal current: strong dependence on $V_{out}$

With channel-length modulation neglected for now and $V_{SG} = V_{out}$,

$$I_1 = \frac12\,\mu_pC_{ox}\frac{W}{L}\,(V_{SG} - |V_{TH}|)^2 = \frac12\,\mu_pC_{ox}\frac{W}{L}\,(V_{out} - |V_{TH}|)^2 .$$

The current is a **quadratic function of the terminal voltage**. Saturation makes the current insensitive to $V_{SD}$ only when $V_{SG}$ is held constant; here the terminal voltage *is* $V_{SG}$, so every change of $V_{out}$ changes the gate drive one-for-one.

**Illustration** (assumed values: $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$, $W/L = 50$, $|V_{TH}| = 0.8$ V, bulk tied to the source). Then $\mu_pC_{ox}W/L = 1.92\ \mathrm{mA/V^2}$, and for example at $V_{out} = 1.5$ V:

$$I_1 = \tfrac12(1.92\ \mathrm{mA/V^2})(1.5 - 0.8\ \mathrm{V})^2 = 0.96\times0.49\ \mathrm{mA} = 0.47\ \mathrm{mA}.$$

| $V_{out}$ (V) | 1.0 | 1.2 | 1.5 | 2.0 | 2.5 |
|---|---|---|---|---|---|
| $I_1$ (mA) | 0.038 | 0.154 | 0.47 | 1.38 | 2.77 |

A 1-V change in $V_{out}$ (1.5 V to 2.5 V) changes the "source" current by a factor of six, where a real current source would keep $I_1$ nearly constant.

### Step 3 — Small-signal impedance seen at the terminal

Apply a small test voltage $v_x$ at the output (source) node, with gate and drain at ground, and find the current $i_x$ flowing into it. The transistor is a controlled source $g_mv_{gs}$ from drain to source in parallel with $r_O$, with $v_{gs} = v_g - v_s = 0 - v_x = -v_x$.

<!-- diagram: diagram-01.cir -->

The controlled source carries $g_mv_{gs} = -g_mv_x$ from drain to source, i.e. $+g_mv_x$ from source to drain, and $r_O$ carries $v_x/r_O$ from source to drain. KCL at the output node:

$$i_x = g_mv_x + \frac{v_x}{r_O} ,$$

$$R_{out} = \frac{v_x}{i_x} = \frac{1}{g_m + 1/r_O} = \frac{1}{g_m}\parallel r_O \approx \frac{1}{g_m}\qquad(g_mr_O \gg 1).$$

The same result follows from Step 2, since $dI_1/dV_{out} = \mu_pC_{ox}(W/L)(V_{out} - |V_{TH}|) = g_m$. If the bulk (n-well) is tied to $V_{DD}$ instead of the source, $v_x$ also changes $V_{BS}$, adding a body-effect current $g_{mb}v_x$, and the impedance drops further to $1/(g_m + g_{mb})\parallel r_O$.

**Numbers.** In the illustration at $V_{out} = 1.5$ V, $g_m = (1.92\ \mathrm{mA/V^2})(0.7\ \mathrm{V}) = 1.34$ mS, so $R_{out} \approx 1/g_m = 744\ \Omega$. A properly connected PMOS current source at the same current would have $R_{out} = r_O = 1/(\lambda I_D)$, for example $1/[(0.2\ \mathrm{V^{-1}})(0.47\ \mathrm{mA})] = 10.6\ \mathrm{k}\Omega$ for $\lambda = 0.2\ \mathrm{V^{-1}}$, about 14 times higher (and much more with a longer device).

### Step 4 — What a current source needs

A MOS current source needs:

1. $V_{GS}$ (here $V_{SG}$) **fixed** by a bias network, independently of the output voltage;
2. the output taken at the **drain**, so that the output voltage changes only $V_{DS}$, to which the current is insensitive (impedance $r_O$).

For a PMOS: source at $V_{DD}$, gate at a fixed bias $V_b$, output at the drain, giving $I_D = \tfrac12\mu_pC_{ox}(W/L)(V_{DD} - V_b - |V_{TH}|)^2$, independent of the output voltage to first order. The structure in the figure violates both conditions: the output is the source, and the gate is referred to ground, so $V_{SG}$ equals the output voltage.

### Result

The PMOS is **diode-connected** (gate and drain both grounded) and its **source is the output terminal**. It is always saturated because $V_{SD} = V_{SG}$, but its gate–source voltage is the output voltage itself:

$$I_1 = \tfrac12\mu_pC_{ox}\frac{W}{L}(V_{out} - |V_{TH}|)^2 ,$$

which depends quadratically on the terminal voltage. Equivalently, the impedance seen at the terminal is only $1/g_m\parallel r_O \approx 1/g_m$ (even lower, $1/(g_m + g_{mb})$, if the bulk is at $V_{DD}$). The structure behaves like a nonlinear resistor (a "diode"), not like a current source, which needs a fixed $V_{SG}$ and the output at the drain.

**Common mistake.** Arguing "the transistor is saturated, so its current is constant". Saturation only makes $I_D$ independent of $V_{DS}$ *for a fixed $V_{GS}$*; here the output voltage sets $V_{SG}$ directly.

**Common mistake.** Blaming triode operation. With $V_{SD} = V_{SG}$ the device can never enter triode; the failure comes from where the output is taken, not from the region of operation.

**Common mistake.** Misreading the device as an NMOS with a fixed gate bias, or taking the output impedance as $r_O$. The output is at the source of a diode-connected PMOS, so the impedance is $1/g_m$, smaller than $r_O$ by roughly the intrinsic gain $g_mr_O$.
