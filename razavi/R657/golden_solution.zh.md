起稳定作用的零点将会消失，环路将（临界）不稳定：它会振荡，而不是稳定下来。
- 电荷泵是电流源（current source），因此无论是否串联 $R_P$，流入 $C_P$ 的电流都相同。$C_P$ 上极板的电压就是泵电流的积分，$V_{C_P}(s) = I_{CP}(s)/(C_Ps)$。若从这里取控制电压，则 $V_{cont}/\Delta\phi = I_P/(2\pi C_Ps)$，$R_P$ 完全不起作用。
- 环路增益（loop gain）变为 $\dfrac{I_PK_{VCO}}{2\pi C_Ps^2}$：两个理想积分器，在所有频率上相位都是 −180°。
- 闭环传递函数为 $H(s) = \dfrac{I_PK_{VCO}/(2\pi C_P)}{s^2 + I_PK_{VCO}/(2\pi C_P)}$，极点位于 $\pm j\sqrt{I_PK_{VCO}/(2\pi C_P)}$（ζ = 0）。控制电压和相位持续振荡，永远不会稳定下来。
- 而若取自电荷泵的输出节点，则 $V_{cont} = I_{CP}R_P + \frac{1}{C_P}\int I_{CP}\,dt$。$I_{CP}R_P$ 项是一个比例（瞬时）校正项；它产生了 $-1/(R_PC_P)$ 处的零点、阻尼 $\zeta = \frac{R_P}{2}\sqrt{I_PC_PK_{VCO}/2\pi} > 0$ 以及相位裕度（phase margin）。（代价是该节点上出现 $I_PR_P$ 的电压跳变，通常用一个与该支路并联的小电容加以平滑。）
