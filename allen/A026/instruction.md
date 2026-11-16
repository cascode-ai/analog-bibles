For an n-channel MOS transistor (width $W$, length $L$, electron mobility $\mu_n$, gate-oxide capacitance per unit area $C_{ox}$) operating with $v_{GS} > V_T$ and a small $v_{DS}$, let $v(y)$ be the channel voltage (relative to the source) at a distance $y$ from the source, with $v(0) = 0$ and $v(L) = v_{DS}$. The inversion charge per unit area is $Q_I(y) = C_{ox}[v_{GS} - v(y) - V_T]$, the channel resistance of a slice $dy$ is $dR = dy/[\mu_nQ_I(y)W]$, so that $i_D\,dy = W\mu_nQ_I(y)\,dv(y)$. With a constant $V_T$, integrating from source to drain gives

$i_D = \dfrac{\mu_nC_{ox}W}{L}\left[(v_{GS} - V_T)v_{DS} - \dfrac{v_{DS}^2}{2}\right]$.

Rederive this expression for $i_D$ given that $V_T$ is not constant but varies linearly with $v(y)$ according to $V_T = V_{T0} + \alpha\,v(y)$.
