# Detailed solution - R469

**Approach.** Each output node receives two signal currents: one from the slow path (input pair $M_1$/$M_2$ → node X or Y → common-source device $M_5$ or $M_6$) and one directly from the fast pair $M_1'$/$M_2'$, whose drains are tied to the outputs. We find each current, check from the cross-connection that they add in phase, multiply by the output resistance, and then examine which devices limit the output voltage range.

### Step 1 — Reading the circuit

From the figure:

- **Slow path.** PMOS pair $M_1$–$M_2$ (with its own tail source) drives nodes X (drain of $M_1$) and Y (drain of $M_2$), loaded by the NMOS current sources $M_3$, $M_4$ (gates at $V_b$). X drives the NMOS $M_5$, and Y drives the NMOS $M_6$. $M_5$/$M_6$ are the pull-down devices of $V_{out1}$/$V_{out2}$, and $M_7$/$M_8$ are PMOS current-source loads.
- **Fast path.** PMOS pair $M_1'$–$M_2'$ (separate tail source). $M_1'$ shares its gate with $M_1$, and $M_2'$ with $M_2$. The drains are **cross-connected** to the outputs: $M_2'$ to $V_{out1}$ and $M_1'$ to $V_{out2}$.
- Input: $v_{g1} = v_{g1'} = +v_{in}/2$ and $v_{g2} = v_{g2'} = -v_{in}/2$. For differential signals both tail nodes are virtual grounds.

### Step 2 — Slow path: current delivered to $V_{out1}$

**First stage.** For a PMOS, raising the gate lowers the current. KCL at X (current from $M_1$ = current into $r_{O1}\parallel r_{O3}$, since the gate of $M_5$ draws none):

$$
\begin{aligned}
g_{m1}v_{sg1} &= \frac{v_X}{r_{O1}\parallel r_{O3}}, \qquad v_{sg1} = -\frac{v_{in}}{2}\\
v_X &= -g_{m1}(r_{O1}\parallel r_{O3})\frac{v_{in}}{2} .
\end{aligned}
$$

**Second stage.** $M_5$ (source grounded) changes the current it pulls out of $V_{out1}$ by $g_{m5}v_X$. The current it effectively *pushes into* $V_{out1}$ is therefore

$$i_{slow} = -g_{m5}v_X = g_{m1}(r_{O1}\parallel r_{O3})\,g_{m5}\,\frac{v_{in}}{2} .$$

Two inversions make the slow path non-inverting from $V_{in1}$ to $V_{out1}$: $v_{g1}\uparrow \Rightarrow$ X $\downarrow \Rightarrow$ $M_5$ conducts less $\Rightarrow V_{out1}\uparrow$.

### Step 3 — Fast path: current delivered to $V_{out1}$

$V_{out1}$ is connected to the drain of $M_2'$, whose gate moves by $-v_{in}/2$. Its source-gate voltage therefore *increases* by $v_{in}/2$, and it pushes more current into $V_{out1}$:

$$i_{fast} = g_{m1'}\,\frac{v_{in}}{2}.$$

This has the **same sign** as $i_{slow}$. That is the purpose of the cross-connection: if $M_1'$ fed $V_{out1}$ instead, its current would *fall* as $V_{in1}$ rose, and the fast path would subtract from the slow one.

### Step 4 — Output resistance and gain

**Small-signal model of one side (in words).** Node X: current source $g_{m1}v_{in}/2$ with $r_{O1}\parallel r_{O3}$ to ground. Node $V_{out1}$: current source $g_{m5}v_X$ to ground (pull-down), current source $g_{m1'}v_{in}/2$ injected by $M_2'$, and three resistances to AC ground: $r_{O5}$ ($M_5$), $r_{O7}$ ($M_7$, fixed gate) and $r_{O1'}$ ($M_2'$, whose source is a virtual ground for differential signals).

<!-- diagram: diagram-01.cir -->

KCL at $V_{out1}$:

$$
\begin{aligned}
i_{slow} + i_{fast} &= \frac{v_{out1}}{r_{O5}\parallel r_{O7}\parallel r_{O1'}}\\
v_{out1} &= \left[g_{m1}(r_{O1}\parallel r_{O3})\,g_{m5} + g_{m1'}\right](r_{O5}\parallel r_{O7}\parallel r_{O1'})\,\frac{v_{in}}{2} .
\end{aligned}
$$

By symmetry $v_{out2} = -v_{out1}$, so

$$A_v = \frac{v_{out1} - v_{out2}}{v_{in}} = \left[g_{m1}(r_{O1}\parallel r_{O3})\,g_{m5} + g_{m1'}\right](r_{O5}\parallel r_{O7}\parallel r_{O1'}).$$

**Relative size of the two terms.** The slow path's transconductance is $g_{m5}$ multiplied by the first-stage gain $g_{m1}(r_{O1}\parallel r_{O3})$, typically 20–50. So at low frequency the fast path adds only a few percent:

$$A_v \approx g_{m1}g_{m5}(r_{O1}\parallel r_{O3})(r_{O5}\parallel r_{O7}\parallel r_{O1'}).$$

Its value appears at high frequencies, where the slow path has rolled off (pole at X) and the fast path still delivers $g_{m1'}$ straight to the output. Note also that the extra $r_{O1'}$ slightly *lowers* the output resistance compared with a plain two-stage design.

### Step 5 — Output swing: which devices limit it?

**Lower end.** $V_{out1}$ is the drain of the NMOS $M_5$ (source grounded), saturated for $V_{out} \ge V_{ov5}$ (its overdrive). The PMOS $M_2'$ has no problem with a low drain voltage. So $V_{out,min} = V_{ov5}$.

**Upper end, two candidates.**

1. $M_7$ (PMOS, source at $V_{DD}$): saturated for $V_{out} \le V_{DD} - |V_{ov7}|$.
2. $M_2'$ (PMOS, drain at $V_{out1}$, gate at the input common-mode level $V_{in,CM}$): a PMOS stays saturated while its drain is no higher than its gate plus $|V_{TH}|$:
$$V_{out} \le V_{in,CM} + |V_{TH1'}| .$$

**Which is lower?** The fast pair's own tail source needs headroom, so $V_{in,CM} \le V_{DD} - |V_{GS1'}| - |V_{ov,tail'}|$. Substituting, with $|V_{GS1'}| = |V_{TH1'}| + |V_{ov1'}|$:

$$V_{in,CM} + |V_{TH1'}| \le V_{DD} - |V_{ov1'}| - |V_{ov,tail'}| .$$

This is below the $M_7$ bound unless $|V_{ov7}|$ exceeds $|V_{ov1'}| + |V_{ov,tail'}|$, which is unusual. And for any input CM level below its maximum, the bound is lower still. Hence

$$V_{out,max} \approx \min\left(V_{DD} - |V_{ov7}|,\; V_{in,CM} + |V_{TH1'}|\right),$$

which is normally set by **$M_1'$ and $M_2'$**. Connecting the fast pair's drains to the outputs makes the output swing depend on the input common-mode level: the price of the feedforward path.

### Result

$$|A_v| = \left[g_{m1}(r_{O1}\parallel r_{O3})\,g_{m5} + g_{m1'}\right](r_{O5}\parallel r_{O7}\parallel r_{O1'}),$$

with the slow and fast transconductances adding in phase thanks to the cross-connected drains ($M_2'$ to $V_{out1}$, $M_1'$ to $V_{out2}$).

The output swing is typically limited by the **fast-path transistors $M_1'$ and $M_2'$**. Their drains sit at the outputs while their gates sit at the input CM level, so an output cannot rise above about $V_{in,CM} + |V_{TH,P}|$ without pushing them into triode. This is usually below the $V_{DD} - |V_{ov7}|$ limit of the PMOS loads. The lower limit is $V_{ov5}$.

**Common mistake.** Missing the cross-connection and subtracting the fast-path current, i.e. $[g_{m1}(r_{O1}\parallel r_{O3})g_{m5} - g_{m1'}]$. The drain of $M_2'$ (gate at $V_{in2}$) is tied to $V_{out1}$ precisely so that its current increases when the slow path pushes $V_{out1}$ up.

**Common mistake.** Treating the fast pair's drains as if they fed nodes X/Y, which would multiply $g_{m1'}$ by the second-stage gain. They connect directly to the outputs, where they also add $r_{O1'}$ in parallel with $r_{O5}\parallel r_{O7}$.

**Common mistake.** Concluding that $M_5$–$M_8$ alone set the swing, as in a plain two-stage op amp. The fast-pair devices now hang on the output nodes, and their saturation condition $V_{out} \le V_{in,CM} + |V_{TH}|$ is usually the tighter upper limit.
