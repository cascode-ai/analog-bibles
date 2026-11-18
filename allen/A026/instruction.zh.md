对于工作在 $v_{GS} > V_T$ 且 $v_{DS}$ 较小条件下的 n 沟道 MOS 晶体管（宽度 $W$，长度 $L$，电子迁移率 $\mu_n$，单位面积栅氧电容 $C_{ox}$），设 $v(y)$ 为距源极 $y$ 处的沟道电压（相对于源极），$v(0) = 0$，$v(L) = v_{DS}$。单位面积的反型电荷为 $Q_I(y) = C_{ox}[v_{GS} - v(y) - V_T]$，一小段 $dy$ 的沟道电阻为 $dR = dy/[\mu_nQ_I(y)W]$，因此 $i_D\,dy = W\mu_nQ_I(y)\,dv(y)$。若 $V_T$ 为常数，从源极到漏极积分得

$i_D = \dfrac{\mu_nC_{ox}W}{L}\left[(v_{GS} - V_T)v_{DS} - \dfrac{v_{DS}^2}{2}\right]$。

若 $V_T$ 不是常数，而是按 $V_T = V_{T0} + \alpha\,v(y)$ 随 $v(y)$ 线性变化，重新推导 $i_D$ 的这一表达式。
