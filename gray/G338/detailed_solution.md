# Detailed solution - G338

The multiplier sits in the feedback path of an inverting op-amp stage. Assume negative feedback, use the virtual ground to relate $Z$ to $V_{\text{in}}$, solve the multiplier equation for $V_{\text{out}}$, and then check for which $V_{\text{ref}}$ the feedback is actually negative.

### Step 1 — Virtual-ground node equation

With an ideal op amp in a negative-feedback loop, the differential input voltage is zero and no current enters the inputs. The non-inverting input is grounded, so the inverting node is a virtual ground at 0 V. The two equal resistors $R$ connect that node to $V_{\text{in}}$ and to the multiplier output $Z$; KCL at the node gives

$$
\frac{V_{\text{in}}-0}{R}+\frac{Z-0}{R}=0\quad\Longrightarrow\quad Z=-V_{\text{in}} .
$$

The op amp therefore drives its output to whatever value makes the multiplier produce exactly $-V_{\text{in}}$.

### Step 2 — Multiplier equation and transfer characteristic

The multiplier inputs are $X=V_{\text{out}}$ (the op-amp output) and $Y=V_{\text{ref}}$, so

$$
Z=0.1\,XY=0.1\,V_{\text{out}}V_{\text{ref}} .
$$

Equating with Step 1,

$$
0.1\,V_{\text{out}}V_{\text{ref}}=-V_{\text{in}}\quad\Longrightarrow\quad
V_{\text{out}}=-\frac{10\,V_{\text{in}}}{V_{\text{ref}}}\qquad(\text{all in volts}).
$$

The circuit is an analog divider: it computes $V_{\text{in}}/V_{\text{ref}}$ with a scale factor of $-10$ V. For a fixed $V_{\text{ref}}$ the dc transfer characteristic $V_{\text{out}}$ versus $V_{\text{in}}$ is a straight line through the origin with slope $-10/V_{\text{ref}}$; for example the slope is $-1$ at $V_{\text{ref}}=10$ V and $-10$ at $V_{\text{ref}}=1$ V.

### Step 3 — Condition for negative feedback

Step 1 assumed negative feedback, so check the loop sign. Suppose $V_{\text{out}}$ rises by a small $\delta$. The multiplier output rises by $0.1V_{\text{ref}}\,\delta$, and through the $R$–$R$ divider the inverting node rises by half of that, $0.05V_{\text{ref}}\,\delta$. Because this node drives the inverting input, the op amp pushes its output down, opposing the original change, only if $0.05V_{\text{ref}}\,\delta$ has the same sign as $\delta$:

$$
V_{\text{ref}}>0 .
$$

For $V_{\text{ref}}<0$ the multiplier inverts the fed-back signal, the feedback becomes positive and the output latches at a supply limit, so the formula does not apply. As $V_{\text{ref}}\to0^+$ the loop gain through the multiplier vanishes and the required output $-10V_{\text{in}}/V_{\text{ref}}$ grows without bound, so the output saturates. With a typical $\pm10$ V signal range, $|V_{\text{out}}|\le10$ V requires $|V_{\text{in}}|\le V_{\text{ref}}$.
