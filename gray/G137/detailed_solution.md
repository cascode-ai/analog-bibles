# Detailed solution - G137

Three limits interact: the 200 mW peak dissipation per device sets a minimum $R_L$; the negative swing is limited to 13.4 V by saturation; and the positive swing is limited by the 0.2 mA base drive available to $Q_{14}$, which caps the output current of $Q_{14}$. Find the swing as a function of $R_L$ and maximize $P_L=\hat V_o^2/(2R_L)$ within the dissipation constraint.

### Step 1 — Swing limits as functions of $R_L$

- **Negative:** $Q_{17}$ saturates and the pnp followers $Q_{23}$ and $Q_{20}$ each add $V_{BE(\text{on})}$: $V_o^-=-15+0.2+0.7+0.7=-13.4$ V, for any load.
- **Positive, headroom:** $Q_{13A}$ saturates at $V_o^+=15-0.2-0.7=14.1$ V.
- **Positive, drive:** at most the 0.2 mA of $Q_{13A}$ reaches the base of $Q_{14}$, so the load current cannot exceed

$$
I_{o,\max}=(\beta_F+1)(0.2\ \mathrm{mA})=40.2\ \mathrm{mA},\qquad V_o^+\le(40.2\ \mathrm{mA})R_L .
$$

A symmetric sine therefore has amplitude $\hat V_o=\min\left(13.4\ \mathrm V,\ (40.2\ \mathrm{mA})R_L\right)$ (the 14.1 V headroom limit never binds, since 13.4 V is lower).

### Step 2 — Dissipation constraint

With negligible quiescent current, a conducting output device dissipates $V_o(V_{CC}-V_o)/R_L$, which peaks at $V_{CC}^2/(4R_L)$ when $|V_o|=V_{CC}/2=7.5$ V. For any swing that reaches 7.5 V,

$$
\frac{V_{CC}^2}{4R_L}\le200\ \mathrm{mW}\ \Rightarrow\ R_L\ge\frac{(15\ \mathrm V)^2}{0.8\ \mathrm W}=281\ \Omega.
$$

(A smaller load is allowed only with peaks below 7.5 V. Then the peak dissipation $\hat V_o(V_{CC}-\hat V_o)/R_L\le200$ mW limits the output to $P_L\le(200\ \mathrm{mW})\,\hat V_o/\left(2(V_{CC}-\hat V_o)\right)<100$ mW.)

### Step 3 — Output power versus $R_L$

- At $R_L=281\ \Omega$ the drive limit gives a positive peak of only $(40.2\ \mathrm{mA})(281\ \Omega)=11.3$ V, so $\hat V_o=11.3$ V and $P_L=(11.3\ \mathrm V)^2/(2\cdot281\ \Omega)=227$ mW.
- For $281\ \Omega\le R_L\le13.4\ \mathrm V/40.2\ \mathrm{mA}=333\ \Omega$, $\hat V_o=(40.2\ \mathrm{mA})R_L$ and

$$
P_L=\frac{\left[(40.2\ \mathrm{mA})R_L\right]^2}{2R_L}=\tfrac12(40.2\ \mathrm{mA})^2R_L,
$$

which rises with $R_L$.
- For $R_L>333\ \Omega$, $\hat V_o=13.4$ V is fixed and $P_L=(13.4\ \mathrm V)^2/(2R_L)$ falls.

The maximum is where the current limit and the negative voltage limit coincide:

$$
R_L=\frac{13.4\ \mathrm V}{40.2\ \mathrm{mA}}=333\ \Omega,\qquad P_L=\frac{(13.4\ \mathrm V)^2}{2(333\ \Omega)}=269\ \mathrm{mW}.
$$

The peak device dissipation there is $V_{CC}^2/(4R_L)=169$ mW, inside the 200 mW limit. Using $I_{o,\max}=\beta_F(0.2\ \mathrm{mA})=40$ mA instead gives 335 Ω and 268 mW.

### Step 4 — Efficiency

$$
\eta=\frac{\pi}{4}\frac{\hat V_o}{V_{CC}}=\frac{\pi}{4}\cdot\frac{13.4}{15}=70.2\%,
$$

with output-device supply power $2V_{CC}\hat V_o/(\pi R_L)=384$ mW.

The best choice is **$R_L\approx333\ \Omega$**, giving **$P_L\approx269$ mW** at **$\eta\approx70\%$**. Here the base-drive limit of $Q_{14}$, not the dissipation limit, decides the optimum.
