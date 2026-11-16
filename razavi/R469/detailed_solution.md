# Detailed solution - R469

**Approach.** Each output receives two signal currents: one from the slow path (input pair → X or Y → CS device $M_5$ or $M_6$) and one directly from the fast pair $M_1'$/$M_2'$, whose drains are tied to the outputs. Find each current, check from the cross-connection that they add in phase, multiply by the output resistance, then examine which devices limit the output range.

### Step 1 — Slow path: current delivered to $V_{out1}$

Apply $v_{g1} = v_{g1'} = +v_{in}/2$ and $v_{g2} = v_{g2'} = -v_{in}/2$; both tail nodes are virtual grounds for differential signals. KCL at X (the gate of $M_5$ draws no current):

$$
\begin{aligned}
g_{m1}v_{sg1} &= \frac{v_X}{r_{O1}\parallel r_{O3}}, \qquad v_{sg1} = -\frac{v_{in}}{2}\\
v_X &= -g_{m1}(r_{O1}\parallel r_{O3})\frac{v_{in}}{2} .
\end{aligned}
$$

$M_5$ (source grounded) pulls $g_{m5}v_X$ out of $V_{out1}$, so it effectively *pushes in*

$$i_{slow} = -g_{m5}v_X = g_{m1}(r_{O1}\parallel r_{O3})\,g_{m5}\,\frac{v_{in}}{2} .$$

The two inversions make the slow path non-inverting from $V_{in1}$ to $V_{out1}$.

### Step 2 — Fast path: current delivered to $V_{out1}$

$V_{out1}$ is tied to the drain of $M_2'$, whose gate moves by $-v_{in}/2$; its source-gate voltage rises by $v_{in}/2$, so it pushes more current into $V_{out1}$:

$$i_{fast} = g_{m1'}\,\frac{v_{in}}{2}.$$

This has the **same sign** as $i_{slow}$, which is the purpose of the cross-connection: if $M_1'$ fed $V_{out1}$, the fast path would subtract from the slow one.

### Step 3 — Output resistance and gain

On one side, $M_1$ draws $g_{m1}v_{in}/2$ out of X, which has $r_{O1}\parallel r_{O3}$ to ground; at $V_{out1}$, $M_5$ pulls $g_{m5}v_X$, $M_2'$ injects $g_{m1'}v_{in}/2$, and $r_{O5}$, $r_{O7}$ (fixed gate) and $r_{O1'}$ ($M_2'$, source at a virtual ground) connect to ac ground.

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

The slow path's transconductance is $g_{m5}$ times the first-stage gain $g_{m1}(r_{O1}\parallel r_{O3})$, typically 20–50, so at low frequency the fast path adds only a few percent:

$$A_v \approx g_{m1}g_{m5}(r_{O1}\parallel r_{O3})(r_{O5}\parallel r_{O7}\parallel r_{O1'}).$$

Its value appears at high frequencies, where the slow path has rolled off (pole at X) and the fast path still delivers $g_{m1'}$ to the output. The extra $r_{O1'}$ slightly *lowers* the output resistance compared with a plain two-stage design.

### Step 4 — Output swing: which devices limit it?

**Lower end.** $M_5$ (source grounded) needs $V_{out} \ge V_{ov5}$; the PMOS $M_2'$ has no problem with a low drain voltage. So $V_{out,min} = V_{ov5}$.

**Upper end, two candidates.**

1. $M_7$ (source at $V_{DD}$): $V_{out} \le V_{DD} - |V_{ov7}|$.
2. $M_2'$ (drain at $V_{out1}$, gate at the input CM level $V_{in,CM}$):
$$V_{out} \le V_{in,CM} + |V_{TH1'}| .$$

The fast pair's own tail needs headroom, $V_{in,CM} \le V_{DD} - |V_{GS1'}| - |V_{ov,tail'}|$, so with $|V_{GS1'}| = |V_{TH1'}| + |V_{ov1'}|$:

$$V_{in,CM} + |V_{TH1'}| \le V_{DD} - |V_{ov1'}| - |V_{ov,tail'}| .$$

This is below the $M_7$ bound unless $|V_{ov7}|$ exceeds $|V_{ov1'}| + |V_{ov,tail'}|$ (unusual), and lower still for any input CM below its maximum. Hence

$$V_{out,max} \approx \min\left(V_{DD} - |V_{ov7}|,\; V_{in,CM} + |V_{TH1'}|\right),$$

normally set by **$M_1'$ and $M_2'$**: tying the fast pair's drains to the outputs makes the output swing depend on the input CM level, the price of the feedforward path.

### Result

$$|A_v| = \left[g_{m1}(r_{O1}\parallel r_{O3})\,g_{m5} + g_{m1'}\right](r_{O5}\parallel r_{O7}\parallel r_{O1'}),$$

with the slow and fast transconductances adding in phase thanks to the cross-connected drains ($M_2'$ to $V_{out1}$, $M_1'$ to $V_{out2}$).

The output swing is typically limited by the **fast-path transistors $M_1'$ and $M_2'$**. Their drains sit at the outputs while their gates sit at the input CM level, so an output cannot rise above about $V_{in,CM} + |V_{TH,P}|$ without pushing them into triode. This is usually below the $V_{DD} - |V_{ov7}|$ limit of the PMOS loads. The lower limit is $V_{ov5}$.

**Common mistake.** Missing the cross-connection and subtracting the fast-path current, $[g_{m1}(r_{O1}\parallel r_{O3})g_{m5} - g_{m1'}]$. $M_2'$ (gate at $V_{in2}$) feeds $V_{out1}$ precisely so that its current rises when the slow path pushes $V_{out1}$ up.

**Common mistake.** Letting the fast pair's drains feed X/Y, which would multiply $g_{m1'}$ by the second-stage gain. They connect directly to the outputs, where they also add $r_{O1'}$ in parallel.

**Common mistake.** Concluding that $M_5$–$M_8$ alone set the swing. The fast-pair devices hang on the outputs, and $V_{out} \le V_{in,CM} + |V_{TH}|$ is usually the tighter upper limit.
