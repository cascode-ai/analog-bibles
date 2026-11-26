# Detailed solution - R032

### Model and initial condition

**Approach:** Check the operating region before applying the triode current equation to capacitor discharge. The plotted quantity is $V_X(t)$.

The source and bulk are grounded; $C_1$ connects the drain to ground and initially holds 1 V. Before the step $V_{GS}=0$, so the transistor is off. Neglecting parasitic capacitive coupling, a finite channel current cannot change the capacitor voltage instantaneously: $V_X(0^+)=V_X(0^-)=1\ \mathrm{V}$.

After the gate steps to 3 V,

$$
V_{GS}-V_{TH}=2.3\ \mathrm{V},
\qquad 0\le V_{DS}=V_X\le1\ \mathrm{V}<2.3\ \mathrm{V}.
$$

The transistor is in triode from the start and stays there as the capacitor discharges. The grounded source and bulk imply no body effect. Use the square-law triode model with $\beta=\mu_n C_{ox}W/L$.

### Capacitor current and node equation

Take both branch currents as positive when they leave X. For the capacitor, $V_X$ is the voltage of its upper plate relative to ground. Its charge is $C_1 V_X$, so the current from X into the capacitor is $C_1\,dV_X/dt$. The drain current $I_D$ also points out of X. With no external current injected into X, Kirchhoff's current law gives

$$
C_1\frac{dV_X}{dt}+I_D=0.
$$

In triode, the square-law drain current is

$$
I_D=\beta\left[(V_{GS}-V_{TH})V_{DS}-\frac{V_{DS}^2}{2}\right].
$$

The grounded source gives $V_{DS}=V_X$. Substituting $V_{GS}-V_{TH}=2.3\ \mathrm{V}$ and factoring the result gives

$$
\frac{dV_X}{dt}
=-\frac{\beta}{C_1}V_X\left(2.3\ \mathrm{V}-\frac{V_X}{2}\right).
$$

For $0<V_X\le1\ \mathrm{V}$, the bracket is positive. The channel draws positive current and the upper plate loses charge, so $V_X$ decreases.

### Separation of variables and exact solution

Move the voltage factors to the left and integrate from $V_X(0^+)=1\ \mathrm{V}$ to $V_X(t)$. Using $v$ as the integration variable,

$$
\int_{1\ \mathrm{V}}^{V_X(t)}
\frac{dv}{v(2.3\ \mathrm{V}-v/2)}
=-\frac{\beta}{C_1}\int_0^t ds,
$$

where $s$ is the time integration variable. Split the voltage integrand into two terms that integrate to logarithms.

$$
\frac{1}{v(2.3\ \mathrm{V}-v/2)}
=\frac{1}{2.3\ \mathrm{V}}
\left(\frac{1}{v}+\frac{1}{4.6\ \mathrm{V}-v}\right).
$$

The second term contributes a minus sign because $d(4.6\ \mathrm{V}-v)=-dv$. Combining the two logarithms gives the antiderivative $\ln[v/(4.6\ \mathrm{V}-v)]$ for the sum inside the parentheses. Evaluating the limits and defining $\tau=C_1/[\beta(2.3\ \mathrm{V})]$ gives

$$
\ln\frac{V_X(t)}{4.6\ \mathrm{V}-V_X(t)}
-\ln\frac{1\ \mathrm{V}}{4.6\ \mathrm{V}-1\ \mathrm{V}}
=-\frac{t}{\tau}.
$$

The initial ratio is $1/3.6$. Exponentiating and rearranging gives

$$
\frac{V_X(t)}{4.6\ \mathrm{V}-V_X(t)}=\frac{e^{-t/\tau}}{3.6}
\quad\Longrightarrow\quad
(1+3.6e^{t/\tau})V_X(t)=4.6\ \mathrm{V}.
$$

Thus the exact solution is

$$
V_X(t)=\frac{4.6\ \mathrm{V}}{1+3.6e^{t/\tau}}
\quad(t\ge0).
$$

At $t=0$ the denominator is 4.6, giving the required 1 V. At finite positive times the denominator grows and $0<V_X<1\ \mathrm{V}$, which confirms the triode condition throughout discharge. The voltage tends to zero as $t$ grows.

### Initial current and slope

Substitute $V_X(0^+)=1\ \mathrm{V}$ into the drain current, then use the node equation to find the initial slope.

$$
I_D(0^+)=\beta\left[(2.3\ \mathrm{V})(1\ \mathrm{V})-\frac{(1\ \mathrm{V})^2}{2}\right]
=1.8\,\beta\,\mathrm{V^2},
\qquad
\left.\frac{dV_X}{dt}\right|_{0^+}=-\frac{I_D(0^+)}{C_1}
=-\frac{1.8\,\beta\,\mathrm{V^2}}{C_1}.
$$

### Approximation and calculated graph

For $V_X\ll2.3\ \mathrm{V}$, the quadratic term becomes negligible. Then

$$
R_{on}=\frac{1}{\beta(2.3\ \mathrm{V})},
\qquad
V_X(t)\simeq(1.2778\ \mathrm{V})e^{-t/\tau}
\quad(t\gg\tau).
$$

The exact curve initially falls more slowly than $(1\ \mathrm{V})e^{-t/\tau}$: the slope magnitude is $1.8\,\beta\,\mathrm{V^2}/C_1$ rather than $2.3\,\beta\,\mathrm{V^2}/C_1$. Exponential behavior is an asymptotic approximation, not the exact finite-time waveform.

The graph evaluates the exact solution with example parameters $\beta=1\ \mathrm{mA/V^2}$ and $C_1=1\ \mathrm{pF}$. These give $R_{on}=434.78\ \Omega$, $\tau=0.43478\ \mathrm{ns}$, initial current $1.8\ \mathrm{mA}$, and initial slope $-1.8\ \mathrm{V/ns}$. The calculated voltages are $V_X(0.5\ \mathrm{ns})=0.37188\ \mathrm{V}$ and $V_X(1\ \mathrm{ns})=0.12464\ \mathrm{V}$. Other positive $\beta,C_1$ scale time through $C_1/\beta$.

![R032: exact triode discharge waveform and time constant](/q/R032/solution-waveform.svg)

**Common mistake:** A constant-current saturation ramp is inconsistent with the initial $V_{DS}=1\ \mathrm{V}$. The output neither jumps with the gate nor stops at a nonzero voltage: the conducting channel discharges the capacitor toward zero.
