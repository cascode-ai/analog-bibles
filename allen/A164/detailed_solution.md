# Detailed solution - A164

Slewing occurs when a large input steers the whole tail current into one transistor. The rate of change of $v_{OUT}$ is then the current that flows through the floating capacitor $C_L$ divided by $C_L$; find that current by KCL at the two drains, D1 and D2, for each kind of load. Take the input step that turns M2 off, so M1 carries $I_{SS}$; the opposite step gives the same rate with the opposite sign.

### Step 1 — Current-source loads

Let $i_C=C_L\,dv_{OUT}/dt$ be the current flowing through $C_L$ from D1 to D2 ($v_{OUT}=v_{D1}-v_{D2}$). With M2 off, KCL at the two drains gives

$$
\text{D1: }\ 0.5I_{SS}=I_{SS}+i_C,\qquad
\text{D2: }\ 0.5I_{SS}+i_C=0 .
$$

Both give $i_C=-0.5I_{SS}$: node D1 must deliver $I_{SS}$ to M1 but its source supplies only $0.5I_{SS}$, so the other $0.5I_{SS}$ comes through $C_L$ from D2, where the 0.5$I_{SS}$ source has nowhere else to go. The current is constant, so the output is a linear ramp with

$$
SR=\left|\frac{dv_{OUT}}{dt}\right|=\frac{|i_C|}{C_L}=\frac{I_{SS}}{2C_L}.
$$

### Step 2 — Resistive loads: differential equation

With resistors $R_L$ from each drain to $V_{DD}$, the load currents depend on the drain voltages. With M2 off,

$$
\text{D1: }\ \frac{V_{DD}-v_{D1}}{R_L}=I_{SS}+i_C,\qquad
\text{D2: }\ \frac{V_{DD}-v_{D2}}{R_L}+i_C=0 .
$$

Subtracting the second from the first eliminates $V_{DD}$:

$$
-\frac{v_{OUT}}{R_L}=I_{SS}+2i_C
\quad\Rightarrow\quad
2C_L\frac{dv_{OUT}}{dt}=-\left(I_{SS}+\frac{v_{OUT}}{R_L}\right).
$$

This is a first-order equation with time constant $\tau=2R_LC_L$ and final value $v_{OUT}\to-I_{SS}R_L$, so the transition is an exponential, not a linear ramp; the slope is largest at its start.

### Step 3 — Resistive loads: maximum rate

The largest transition starts from the opposite steered state, in which M2 carried all of $I_{SS}$: $v_{D1}=V_{DD}$, $v_{D2}=V_{DD}-I_{SS}R_L$, so $v_{OUT}(0)=+I_{SS}R_L$. Then

$$
2C_L\frac{dv_{OUT}}{dt}\bigg|_{t=0}=-(I_{SS}+I_{SS})
\quad\Rightarrow\quad
SR=\left|\frac{dv_{OUT}}{dt}\right|_{\max}=\frac{I_{SS}}{C_L}.
$$

Here the resistor currents add to the capacitor current: at $t=0$, D2's resistor still conducts $I_{SS}$, all of which flows through $C_L$. As $v_{OUT}$ moves toward $-I_{SS}R_L$ the rate decays as $e^{-t/2R_LC_L}$. From a balanced start ($v_{OUT}=0$) the initial rate would be only $I_{SS}/(2C_L)$, so with resistors the slew rate depends on the output state, its maximum being $I_{SS}/C_L$.
