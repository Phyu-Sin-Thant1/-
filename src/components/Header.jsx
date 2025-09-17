import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleSignUpClick = () => {
    navigate('/signup')
  }

  const handleLogoClick = () => {
    navigate('/')
  }

  const handleMapClick = () => {
    navigate('/map')
  }

  const handlePresalesClick = () => {
    navigate('/presales')
  }

  const handleInterestListClick = () => {
    navigate('/interest-list')
  }

  const handleAgentSignUpClick = () => {
    navigate('/agent-signup')
  }

  const handleListPropertyClick = () => {
    navigate('/list-property')
  }
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <button
                onClick={handleLogoClick}
                className="text-2xl font-bold text-dabang-primary hover:text-dabang-primary/80 transition-colors cursor-pointer focus:outline-none"
              >
                두부
              </button>
            </div>
          </div>

          {/* Key Services Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={handleMapClick}
              className="text-gray-700 hover:text-dabang-primary px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none"
            >
              지도
            </button>
            <button
              onClick={handlePresalesClick}
              className="text-gray-700 hover:text-dabang-primary px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none"
            >
              분양/신축
            </button>
            <button
              onClick={handleInterestListClick}
              className="text-gray-700 hover:text-dabang-primary px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none"
            >
              관심목록
            </button>
            <button
              onClick={handleAgentSignUpClick}
              className="text-gray-700 hover:text-dabang-primary px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none"
            >
              중개사 가입
            </button>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={handleListPropertyClick}
              className="btn-secondary text-sm bg-dabang-secondary hover:bg-orange-600 text-white border-0 px-4 py-2 rounded-lg font-medium transition-colors"
            >
              매물 등록
            </button>
            <button
              onClick={handleLoginClick}
              className="text-gray-700 hover:text-dabang-primary text-sm font-medium transition-colors"
            >
              로그인
            </button>
            <button
              onClick={handleSignUpClick}
              className="btn-secondary text-sm px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300 rounded-lg font-medium transition-colors"
            >
              회원가입
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header