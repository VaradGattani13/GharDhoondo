import React from 'react'
import { useLocation } from 'react-router'
import { useNavigate } from 'react-router';

// Use Location is used to fetch the location of cuurent route

const Header = () => {
  const location=useLocation();
  const navigate=useNavigate();


  // This Will Give the router which router you are cuurently working on
  console.log(location.pathname);

  // For highlighting the current route
function MatchPathRoute(route){
  if(route===location.pathname){
    return 1;
  }
}

  return (
    <div className='bg-cyan border-b shadow-sm sticky top-0 z-50'>
      <header className='flex justify-between items-center px-3  mx-auto' >
        <div>
          <img src=" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAY1BMVEX///8AAACmpqatra1VVVXg4ODu7u7S0tL7+/tZWVn19fWxsbEzMzPCwsLJycnMzMwUFBSKioomJiZgYGA+Pj6bm5scHBxqamp9fX0uLi7o6OiDg4O4uLiQkJBzc3MJCQlISEicsj0QAAADiUlEQVRoge2a65KiMBCFQQQjindBGZ3x/Z9yvXQ7SJ8QwODW1vb5NUUm/Zlw0p1Eg0ClUqlU/7smp+g0sbSlk1fFPsHJOQ9vys8JaD2FdRX+0IvjM+pxIVrTuWCHmS/06CVsVG9OJDoceUIfanEPH2ObsQg8Np9hx0cQef5i5KHY2QoEvvq96riB2CMQVgQfhv1lRYfhelA2cFlV2wHZ8aYRfU0z5VDs7MeBDsPVYhg2cNlUPoqGYAOXRUEkH669s81WRlteny/l48L4ZZcyl20etTOR/tslqUd2JkNtOYODGVmdQO7ryd7LSOtK8xqM0he7XjHDesUGjvPDToHLqG6ko/Txx2IYdrwTUTZUL5NxOKbNmjPj9WGDEY1psPHNUCv6HGlzpu/DbnAZe5/3gC7HdWV/yxAzajo/n5zpycwnOwErl11WVB4W7Di8o+nDBi7jXVmtacePwba8F3shK+aUBjipD3BFR6MUFLYebFAxv6gJvVi2gX1P1Z7d4DIcvumDdWInYLXStCa2aZ1Smpm8xwYua2EnixG7scFa2dKggAF/9UMLEKzNtmzgsoO9CcYHlU8eVoEaKiYKiT8kqKrfTjKqCeyyixMdhhe747gG2QSsxC4TCQWL00yDX7GyXHRgl8kbFJtONE3Scbm8HXmqIZeBYmrVnvqAJGQ1u/1/DUhzDfo21rGsIRmdMZc0fThb2LWjFwVODlMj0WDHNadTpS1LNokcV0rvHoXjwE0Gu6zVDliIcgJyXO2mDbnsMTmm3c5fak39XY4D8ak9KWRTSxVJC8eh3QatxLKry6rakV/APptPc8BlG3uvTuIRAMLdceiMmVpnq6PozaFzVQbR7BJ32XLrYHdsFsgFSJ+1bNhzdtC0tM3hPBDVg1afZefTXVy9xATn9SKxsf3nG+LR1Bx3LTkvU8vZtkvZcosKm3lF3TxYmVxa86Z/QsEqjMhhu/taKp+vnHJw3GZz1E0XepXP2pCTBanSrei9LNHd/Ls6UjnmmrXkpHo/x3BtAzXXi4j2+NaBz1cPa/Eh2kMyw+Lidctx+6Ai87t/HZp9rY1g6/Iptl3KVraylf132Jcyrqt0l10/7DHo5bw+V7ayla1sZStb2cpWtrKV3YPtvs3sxz61YJuB2NYLnqocv1PpyZ6BTgguvxV90QX0cZzH8pboIEizqEnol+SOHo6vn1UqlUr1L+sP4Ck1s2DOs3AAAAAASUVORK5CYII=" alt="Home Icon" className='h-8 cursor-pointer'    onClick={()=>navigate('/')}  />
        </div>
        <div>
          <ul className='flex space-x-5'>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-[3px] border-b-transprent ${MatchPathRoute('/') &&"text-black border-b-blue-500" }   `}
            onClick={()=>navigate('/')} >Home</li>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-[3px] border-b-transprent ${MatchPathRoute('/offers') &&"text-black border-b-blue-500" }`} onClick={()=>navigate('/offers')} >Offers</li>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-[3px] border-b-transprent ${MatchPathRoute('/signin') &&"text-black border-b-blue-500" }`}onClick={()=>navigate('/signin')} >Sign In</li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Header