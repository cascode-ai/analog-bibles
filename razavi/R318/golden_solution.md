# Golden Solution - R318

## Reference answer

Transfer function (differential, or each half):
$$\frac{V_{out}}{V_{in}}(s) = -g_{m1}Z_L(s) = -g_{m1}\frac{1 + RCs}{g_{m3} + Cs}$$
Load impedance: $Z_L = \dfrac{1 + RCs}{g_{m3} + Cs}$, equal to $1/g_{m3}$ at dc and $R$ at high frequencies; zero at $1/(RC)$, pole at $g_{m3}/C$.

Inductive when $R > 1/g_{m3}$: the zero lies below the pole and $|Z_L|$ rises with frequency. Equivalent network: $1/g_{m3}$ in series with $(R - 1/g_{m3}) \| L$, $L = C(R - 1/g_{m3})/g_{m3}$. Derivation: the gate of $M_3$ sees $V_{out}/(1 + RCs)$ ($R$–$C$ divider to the ac-grounded supply), so the load current is $g_{m3}V_{out}/(1 + RCs) + CsV_{out}/(1 + RCs)$.

135° question: not in this model. The stage has one pole and one zero, so its phase relative to the 180° inversion is $\arctan(\omega RC) - \arctan(\omega C/g_{m3})$, always between −90° and +90°.
- The gain falls with frequency (and can drop through unity) only when the load is capacitive ($R < 1/g_{m3}$). The extra phase is then a lag below 90°: total 180°–270° with the inversion, 0–90° without it, never 135°.
- In the inductive case the zero gives phase lead, so a total of −135° (180° minus a 45° lead, possible when $g_{m3}R \ge 3 + 2\sqrt2 \approx 5.8$) can occur. But there the gain rises from $g_{m1}/g_{m3}$ toward $g_{m1}R$ instead of dropping to unity.
- A response that both drops through unity and has 135° of phase shift needs a second pole, i.e. the output-node capacitance (neglected here). With it, the inductive load and the output capacitance form a second-order response whose phase can reach 135° at unity gain.

## Grading notes

Credit split: transfer function ≈ 50%, inductive condition ≈ 30%, the 135° question ≈ 20%. +2: $H(s) = -g_{m1}(1 + RCs)/(g_{m3} + Cs)$ (with $r_O$ terms if included consistently), inductive behaviour for $R > 1/g_{m3}$ (zero below the pole), and a reasoned answer to the last question based on the phase of the single pole–zero pair at the unity-gain crossing, either the reference's "not with only $C_1$, $C_2$ (gain falls only when capacitive, lag < 90°); a second pole such as the output capacitance is needed", or an explicitly argued reading that counts the inversion and uses a 45° inductive lead (with the gain behaviour discussed). +1: transfer function and inductive condition right, last part answered without a phase argument. 0: transfer function right but the inductive condition wrong or missing. -2 (asserted as fact): load impedance with the zero and pole swapped (inductive for $R < 1/g_{m3}$), $M_3$ treated as a current source, or a transfer function of second order derived from the given elements alone.
